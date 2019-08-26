const numberOfVowels = (data) => {
	let vowels = 'aeiou';
	let vcount = 0;
    for (let i in data) {
    	if (vowels.indexOf(data[i]) !== -1) {
    		vcount += 1;
    	}
    }
    return vcount;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("apple"));
console.log(numberOfVowels("madagascar"));
console.log(numberOfVowels("pewrueonfweoriuygcnlskcnawp[eoihfsaodbaauiielkcnb"));