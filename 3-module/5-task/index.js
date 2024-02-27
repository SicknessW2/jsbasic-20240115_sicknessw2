function getMinMax(str) {
    const numbers = str
    .split(' ')
    .map(value => +value)
    .filter(value => !isNaN(value));

    const result = {
    	min: Math.min(...numbers),
    	max: Math.max(...numbers)
    }
	return result
}