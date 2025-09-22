/*
 1. Two Sum
 leetcode url: https://leetcode.com/problems/two-sum/description/
*/
var twoSum = function(nums, target) {
	class HashMap{
		constructor(){
			this.map = new Map();
		}
		set(key,value){
			this.map.set(key,value);
		}
		get(key){
			return this.map.has(key)?this.map.get(key):null;
		}
		hasKey(key){
			return this.map.has(key);
		}
	}

	let map = new HashMap();
	for(let i = 0; i < nums.length; i++){
		let comp = target - nums[i];
		if(map.hasKey(comp)){
			return [map.get(comp),i];
		}
		map.set(nums[i],i);
	}
};

console.log(twoSum([2,7,11,15],9));