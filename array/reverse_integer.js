//7. Reverse Integer
var reverse = function(x) {
    let numStatus = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let arr = String(x).split("");
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    let result = parseInt(arr.join("")) * numStatus;


    if (result < -(2**31) || result > (2**31 - 1)) {
        return 0;
    }

    return result;
};


console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));
console.log(reverse(1534236469)); 

