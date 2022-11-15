var  nums = [3,2,6];
var target = 6;

var twoSum = function(nums, target) {

    for (i=0; i < nums.length ; i++){
        if(nums[i]+nums[i+1] === target){
            var outArray = [i,i+1];
            break
        } else {
            
        }
    }    
    console.log(outArray)
    return outArray
};


twoSum(nums, target)