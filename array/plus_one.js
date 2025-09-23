//66. Plus One
var plusOne = function(digits) {
	let str="";
	for(let i = 0; i < digits.length; i++){
		str+=digits[i];
	}
	let num = String(BigInt(str)+1n);
	let result = [];
	for(let i = 0; i < num.length; i++){
		result.push(parseInt(num[i]));
	}
	return result;
};

console.log(plusOne([1,2,3]));
//console.log(plusOne([4,3,2,1]));