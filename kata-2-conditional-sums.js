const conditionalSum = (values, condition) => {
	let sum = 0;
	for (let item in values) {
		if (values[item] % 2 === 0 && condition === 'even') {
			sum += values[item];
		} else if (values[item] % 2 !== 0 && condition === 'odd') {
			sum += values[item];
		}
	}
	return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));