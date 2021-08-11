// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。
var twoSum = function(nums, target) {
    let hash ={};
    for(let i = 0; i<nums.length; i++){
        if(hash[target - nums[i]] !==undefined){
            return [i,hash[target-nums[i]]];
        }
        hash[nums[i]] =i ; 
    }
    return [];
    
};
twoSum([2,7,11,15],13);
// 题解： 用到了hash-map？？