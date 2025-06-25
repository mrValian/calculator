import {
    handelerNum,
    handlerCancel,
    handlerMines,
    handlerPlus,
    handlerResult,
} from './handlers';

export const getButtons = (state) => [
	{
		id: '1',
		label: '1',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '2',
		label: '2',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '3',
		label: '3',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '4',
		label: '4',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '5',
		label: '5',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '6',
		label: '6',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '7',
		label: '7',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '8',
		label: '8',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '9',
		label: '9',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: '0',
		label: '0',
		group: 'left',
		handler: (label) => {
			handelerNum(state, label);
		},
	},
	{
		id: 'C',
		label: 'C',
		group: 'right',
		handler: () => {
			handlerCancel(state);
		},
	},
	{
		id: '+',
		label: '+',
		group: 'right',
		handler: () => {
			handlerPlus(state);
		},
	},
	{
		id: '-',
		label: '-',
		group: 'right',
		handler: () => {
			handlerMines(state);
		},
	},
	{
		id: '=',
		label: '=',
		group: 'right',
		handler: () => {
			handlerResult(state);
		},
	},
];
