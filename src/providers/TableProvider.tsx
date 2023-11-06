import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {DataType} from 'types';

const TableContext = createContext<{ data: DataType[], setData: Dispatch<SetStateAction<DataType[]>> }>({
	data: [],
	setData: () => {
	}
});

export const useTableContext = () => {
	const context = useContext(TableContext);
	if (typeof context === 'undefined') {
		throw new Error('useTableContext можно использовать только внутри компонента TableProvider');
	}
	return context;
}

interface IProps {
	initData: DataType[];
	children: ReactNode
}

export const TableProvider = ({initData, children}: IProps) => {
	const [data, setData] = useState(initData);
	return (
		<TableContext.Provider value={{data, setData}}>{children}</TableContext.Provider>
	)
};