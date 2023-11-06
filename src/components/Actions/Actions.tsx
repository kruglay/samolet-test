import style from 'components/Actions/styles.module.css';

import {Button, InputNumber} from 'antd';
import React, {useState} from 'react';
import {DataType, Level} from 'types';
import {useTableContext} from 'providers/TableProvider';

export function addRows(currentRows: DataType[], amount: number) {
	const newRows = [];
	for (let i = 1; i <= amount; i++) {
		newRows.push({
			id: currentRows.length + i,
			[Level.l1]: '',
			[Level.l2]: '',
			[Level.l3]: '',
			[Level.l4]: '',
			[Level.l5]: ''
		});
	}
	return currentRows.concat(newRows);
}

const save = (data: DataType[]) => {
	data.forEach(el => {
		//выводим только то, где есть данные
		if(el[Level.l1] !== '') {
			console.log(el);
		}
	})
}

export const Actions = () => {
	const [amount, setAmount] = useState<number | null>(1);
	const {data, setData} = useTableContext();
	return (
		<div className={style.actions}>
			<div className={style.actionsAdd}>
				<Button onClick={() => amount && setData(prev => addRows(prev, amount))}>Добавить строки</Button>
				<InputNumber min={1} value={amount} onChange={setAmount}/>
			</div>
			<Button onClick={() => save(data)} style={{width: 142}} type="primary">Сохранить</Button>
		</div>
	);
}