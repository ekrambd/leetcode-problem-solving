//7. Reverse Integer

var moveZeroes = function(nums) {
	let lastNonZero = 0;
	for(let i = 0; i < nums.length; i++){
		if(nums[i] != 0){
			let temp = nums[i];
			nums[i] = nums[lastNonZero];
			nums[lastNonZero] = temp;
			lastNonZero++;
		}
	}
	return nums;
};

console.log(moveZeroes([0,1,0,3,12]));