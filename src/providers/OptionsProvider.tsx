import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {IOption} from 'types';
import {allOptions} from 'consts';

const OptionsContext = createContext<{options: IOption[], setOptions: Dispatch<SetStateAction<IOption[]>>}>({options: allOptions, setOptions: () => {}});

export const useOptionsContext = () => {
	const context = useContext(OptionsContext);
	if (typeof context === 'undefined') {
		throw new Error('useOptionsContext можно использовать только внутри компонента OptionsProvider');
	}
	return context;
}

interface IProps {
	allOptions: IOption[];
	children: ReactNode;
}

export const OptionsProvider = ({allOptions, children}: IProps) => {
	const [options, setOptions] = useState(allOptions);
	return (
		<OptionsContext.Provider value={{options, setOptions}}>{children}</OptionsContext.Provider>
	)
};