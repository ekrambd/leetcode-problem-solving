var removeDuplicates = function(nums) {
    
    let unique = Array.from(new Set(nums));

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }
    
    return unique.length; 
};


let arr = [1,1,2];
let len = removeDuplicates(arr);
console.log(len); 
console.log(arr.slice(0,len));
