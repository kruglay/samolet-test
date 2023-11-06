import React from 'react';
import {Table as AntTable} from 'antd';

import {DataType, Level} from 'types';
import {ColumnsType} from 'antd/es/table';
import {TableCell} from 'components/TableCell';
import {useTableContext} from 'providers/TableProvider';

const columns: ColumnsType<DataType> = [
	{
		dataIndex: 'id',
		key: 'id',
		width: 80
	},
	{
		title: 'Уровень 1',
		dataIndex: 'l1',
		key: 'l1',
		render: (text, record, index) => {
			return <TableCell record={record} parent={null} level={Level.l1} />
		}
	},
	{
		title: 'Уровень 2',
		dataIndex: 'l2',
		key: 'l2',
		render: (text, record, index) => {
			return <TableCell record={record} parent={Level.l1} level={Level.l2} />
		}
	},
	{
		title: 'Уровень 3',
		dataIndex: 'l3',
		key: 'l3',
		render: (text, record, index) => {
			return <TableCell record={record} parent={Level.l2} level={Level.l3} />
		}
	},
	{
		title: 'Уровень 4',
		dataIndex: 'l4',
		key: 'l4',
		render: (text, record, index) => {
			return <TableCell record={record} parent={Level.l3} level={Level.l4} />
		}
	},
	{
		title: 'Уровень 5',
		dataIndex: 'l5',
		key: 'l5',
		render: (text, record, index) => {
			return <TableCell record={record} parent={Level.l4} level={Level.l5} />
		}
	},
]


export const Table = () => {
	const {data} = useTableContext();
	return (
		<div style={{height: 740}}>
			<AntTable
				size="small"
				rowKey="id"
				columns={columns}
				dataSource={data}
				pagination={false}
				bordered
				virtual
				scroll={{y: 700}}
			/>
		</div>
	)
}