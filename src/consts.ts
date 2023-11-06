import {DataType, IOption} from 'types';

export const allOptions: IOption[] = [
	{
		id: '1.1',
		parentId: null,
	},
	{
		id: '1.2',
		parentId: null,
	},
	{
		id: '1.3',
		parentId: null,
	},
	// {
	// 	id: '2.1',
	// 	parentId: '1.1'
	// },
	// {
	// 	id: '2.2',
	// 	parentId: '1.2'
	// },
	// {
	// 	id: '3.1',
	// 	parentId: '2.1'
	// },
	// {
	// 	id: '3.2',
	// 	parentId: '2.2'
	// },
	// {
	// 	id: '4.1',
	// 	parentId: '3.1'
	// },
	// {
	// 	id: '4.2',
	// 	parentId: '3.2'
	// },
	// {
	// 	id: '5.1',
	// 	parentId: '4.1'
	// },
	// {
	// 	id: '5.2',
	// 	parentId: '4.2'
	// }
];


export const initData: DataType[] = [
	{
		id: 1,
		l1: '1.2',
		l2: '2.2',
		l3: '3.2',
		l4: '4.2',
		l5: '5.2',
	},
	{
		id: 2,
		l1: '',
		l2: '',
		l3: '',
		l4: '',
		l5: '',
	}
];