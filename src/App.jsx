import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const output = operand1 + operator + operand2;
	const [isResult, setIsResult] = useState(false);

	return (
		<div className={styles.app}>
			<div className={`${styles.screen} ${isResult ? styles.result : ''}`}>{output}</div>
			<div className={styles.buttons}>
				<div className={styles.leftGroup}>
					{NUMS.map((num, i) => (
						<button
							onClick={() => {
								if (operator === '') {
									if (operand1 === '0') {
										setOperand1(num);
									} else {
										setOperand1(operand1 + num);
									}
								} else {
									if (operand2 === '0') {
										setOperand2(num);
									} else {
										setOperand2(operand2 + num);
									}
								}
								setIsResult(false);
							}}
							key={i}
							className={styles.button}
						>
							{num}
						</button>
					))}
				</div>
				<div className={styles.rightGroup}>
					<button onClick={() => {
						setOperand1('0');
						setOperand2('');
						setOperator('');
						setIsResult(false);
					}} className={styles.button}>
						C
					</button>
					<button onClick={() => {
						setOperator('+');
						setIsResult(false);
					}} className={styles.button}>
						+
					</button>
					<button onClick={() => {
						setOperator('-');
						setIsResult(false);
					}} className={styles.button}>
						-
					</button>
					<button onClick={() => {
						if (operand2 === '') {
							setOperator('');
						} else {
							switch(operator) {
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
					}} className={styles.button}>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
