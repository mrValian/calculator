import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handelerNum = (label) => {
		if (operator === '') {
			if (operand1 === '0') {
				setOperand1(label);
			} else {
				setOperand1(operand1 + label);
			}
		} else {
			if (operand2 === '0') {
				setOperand2(label);
			} else {
				setOperand2(operand2 + label);
			}
		}
		setIsResult(false);
	};

	const handlerCancel = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
		setIsResult(false);
	};

	const handlerPlus = () => {
		setOperator('+');
		setIsResult(false);
	};

	const handlerMines = () => {
		setOperator('-');
		setIsResult(false);
	};

	const handlerResult = () => {
		if (operand2 === '') {
			setOperator('');
		} else {
			switch (operator) {
				case '+':
					setOperand1(+operand1 + +operand2);
					setOperand2('');
					setOperator('');
					break;
				case '-':
					setOperand1(+operand1 - +operand2);
					setOperand2('');
					setOperator('');
					break;
				default:
				// nothing
			}
		}
		setIsResult(true);
	};

	const buttons = [
		{ id: '1', label: '1', group: 'left', handler: handelerNum },
		{ id: '2', label: '2', group: 'left', handler: handelerNum },
		{ id: '3', label: '3', group: 'left', handler: handelerNum },
		{ id: '4', label: '4', group: 'left', handler: handelerNum },
		{ id: '5', label: '5', group: 'left', handler: handelerNum },
		{ id: '6', label: '6', group: 'left', handler: handelerNum },
		{ id: '7', label: '7', group: 'left', handler: handelerNum },
		{ id: '8', label: '8', group: 'left', handler: handelerNum },
		{ id: '9', label: '9', group: 'left', handler: handelerNum },
		{ id: '0', label: '0', group: 'left', handler: handelerNum },
		{ id: 'C', label: 'C', group: 'right', handler: handlerCancel },
		{ id: '+', label: '+', group: 'right', handler: handlerPlus },
		{ id: '-', label: '-', group: 'right', handler: handlerMines },
		{ id: '=', label: '=', group: 'right', handler: handlerResult },
	];

	const output = operand1 + operator + operand2;

	return (
		<div className={styles.app}>
			<div className={`${styles.screen} ${isResult ? styles.result : ''}`}>
				{output}
			</div>
			<div className={styles.buttons}>
				<div className={styles.leftGroup}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'left' ? (
							<button
								onClick={() => {
									handler(label);
								}}
								key={id}
								className={styles.button}
							>
								{label}
							</button>
						) : (
							''
						),
					)}
				</div>
				<div className={styles.rightGroup}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'right' ? (
							<button
								key={id}
								onClick={() => {
									handler();
								}}
								className={styles.button}
							>
								{label}
							</button>
						) : (
							''
						),
					)}
				</div>
			</div>
		</div>
	);
};
