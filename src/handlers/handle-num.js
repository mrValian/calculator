export const handelerNum = (
	{ setOperand1, setOperand2, setIsResult, operand1, operand2, operator },
	label,
) => {
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
