//217. Contains Duplicate

var containsDuplicate = function(nums) {
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
	}
	let map = new HashMap();
	for(let i = 0; i < nums.length; i++){
		let count = map.get(nums[i]);
		if(count == null){
			map.set(nums[i],1);
		}else{
			map.set(nums[i],count+1);
		}
	}
	for(let i = 0; i < nums.length; i++){
		if(map.get(nums[i]) > 1){
			return true;
		}
	}
	return false;
};

console.log(containsDuplicate([1,2,3,1]));