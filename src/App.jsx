import { useState } from 'react';
import style from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const [result, setResult] = useState('');
	const [display, setDisplay] = useState('');

	const [error, setError] = useState('');

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const SIGN = ['+', '-', '=', 'C'];

	let strHub = '';

	const clickToNumbers = (event) => {
		strHub += event.target.dataset.key;
		if (operator !== '') {
			setOperand2((updatedValue) => updatedValue + strHub);
			setError('');
		} else {
			setOperand1((updatedValue) => updatedValue + strHub);
			setError('');
		}
	};

	const clickToSign = (event) => {
		let sign = event.target.dataset.key;
		console.log(sign);
		if (sign === '+') {
			if (+result > 0) {
				setOperand1((updatedValue) => updatedValue + result);
			}
			setOperator(sign);
			strHub = '';
		} else if (sign === '-') {
			if (+result > 0) {
				setOperand1((updatedValue) => updatedValue + result);
			}
			setOperator(sign);
			strHub = '';
		} else if (sign === '=') {
			if (operand1 === '') {
				setError('Введите 1 операнд');
			} else if (operand2 === '') {
				setError('Введите 2 операнд');
			} else {
				let res =
					operator === '+' ? +operand1 + +operand2 : +operand1 - +operand2;
				let str = `${operand1} ${operator} ${operand2} = `;
				setDisplay(str);
				setResult(res);
				setOperator(sign);
				setOperand1('');
				setOperand2('');
			}
		} else if (sign === 'C') {
			strHub = '';
			setDisplay('');
			setResult('');
			setOperand1('');
			setOperand2('');
			setOperator('');
		}
	};

	return (
		<div className={style.app}>
			<h1 className={style.pageHeading}>Ввод значения</h1>
			<div className={style['app-display'] + ' ' + (operator === '=' ? style['app-flat'] : '')}>
				{operator !== '='
					? `${operand1} ${operator} ${operand2}`
					: `${display} ${result}`}
			</div>
			<div>
				{NUMS.map((elem, i) => (
					<button className={style['app-btn']} onClick={clickToNumbers} data-key={elem} key={i}>
						{elem}
					</button>
				))}
			</div>
			<div>
				{SIGN.map((elem, i) => (
					<button className={style['app-btn']} onClick={clickToSign} data-key={elem} key={i}>
						{elem}
					</button>
				))}
			</div>
			<div>{error}</div>
		</div>
	);
};
