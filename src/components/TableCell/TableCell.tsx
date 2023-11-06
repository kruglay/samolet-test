import style from 'components/TableCell/styles.module.css';

import {Button, Select} from 'antd';
import React from 'react';

import {DataType, IOption, Level} from 'types';
import {useOptionsContext} from 'providers/OptionsProvider';
import {useTableContext} from 'providers/TableProvider';

interface IProps {
	parent: Level | null;
	level: Level;
	record: DataType;
}

const setValue = (record: DataType, value: string, level: Level) => {
	record[level] = value;
	const keys = Object.keys(record).slice(1) as Level[];
	const levelIndex = keys.indexOf(level);
	for (let i = levelIndex + 1; i < keys.length; i++) {
		record[keys[i]] = '';
	}
}

const createOption = (record: DataType, parent: Level | null, level: Level): IOption => {
	const levelNum = level.replace('l', '');
	let minorLevelNum;
	if (parent !== null) {
		minorLevelNum = record[parent]?.split('.').pop();
	}
	return {parentId: parent === null ? parent : record[parent], id: `${levelNum}.${minorLevelNum}`}
}

const setNewData = (record: DataType, value: string, level: Level) => (prev: DataType[]) => {
	return prev.map(el => {
		const newEl = {...el};
		if (el.id === record.id) {
			setValue(newEl, value, level);
		}
		return newEl;
	});
}

export const TableCell = ({parent, level, record}: IProps) => {
	const {options, setOptions} = useOptionsContext();
	const {setData} = useTableContext();
	const filtered = options.filter((el: IOption) => el.parentId === (parent === null ? null : record[parent]));
	const selectOptions = filtered.length > 0 ? filtered.map(el => ({value: el.id})) : [];
	let content = null;
	if (selectOptions.length === 0) {
		content = parent && record[parent] === '' ? null :
			<Button
				style={{width: 120}}
				onClick={() => {
					const newOption = createOption(record, parent, level);
					setOptions(prev => [...prev, newOption]);
					setData(setNewData(record, newOption.id, level));
				}}
			>
				Добавить
			</Button>;
	} else {
		content = (
			<Select
				allowClear
				options={selectOptions}
				style={{width: 120}}
				value={record[level]}
				onChange={(value) => {
					const newValue = value === undefined ? '' : value;
					setData(setNewData(record, newValue, level))
				}}
			/>
		);
	}


	return (
		<div className={style.tableCell}>
			{content}
		</div>
	)
};