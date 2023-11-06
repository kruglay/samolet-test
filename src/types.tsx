export interface IOption {
	id: string;
	parentId: string | null;
}

export enum Level {
	l1 = 'l1',
	l2 = 'l2',
	l3 = 'l3',
	l4 = 'l4',
	l5 = 'l5',
}

export interface DataType {
	id: number;
	[Level.l1]: string | null;
	[Level.l2]: string | null;
	[Level.l3]: string | null;
	[Level.l4]: string | null;
	[Level.l5]: string | null;
}

