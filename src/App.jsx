import { useState } from 'react';
import { getButtons } from './get-buttons';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const state = {
		operand1,
		setOperand1,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
		operator,
		setOperator,
	};

	const buttons = getButtons(state);

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
