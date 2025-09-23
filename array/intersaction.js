//350. Intersection of Two Arrays II

var intersect = function(nums1, nums2) {
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
	for(let i = 0; i < nums1.length; i++){
		let count = map.get(nums1[i]);
		if(count == null){
			map.set(nums1[i],1);
		}else{
			map.set(nums1[i],count+1);
		}
	}

	let result = [];
	for(let i = 0; i < nums2.length; i++){
		let count = map.get(nums2[i]);
		if(count > 0){
			result.push(nums2[i]);
			map.set(nums2[i],count-1);
		}
	}
	return result;
};


console.log(intersect([1,2,2,1],[2,2]));