export const handlerResult = ({
	setOperand1,
	setOperand2,
	setOperator,
	setIsResult,
	operand1,
	operand2,
	operator,
}) => {
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