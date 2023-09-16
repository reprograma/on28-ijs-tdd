function sum(num1, num2) {
	let result = "";

	if (num1 === num2) {
		result = (num1 + num2) * 3;
	} else {
		result = num1 + num2;
	}

	return result;
}

module.exports = sum;
