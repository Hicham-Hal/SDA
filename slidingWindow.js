function maxSum(nums, k){
    
    let windowSum = 0

    //Calculating the sum of the first window
    for (let i = 0; i < k; i++){
        windowSum += nums[i]
    }

    let maxSum = windowSum
    for(let right = k; right < nums.length; right++){
        windowSum += nums[right];
        windowSum -= nums[right - k];
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum;
}

maxSum([1,2,3,4,5,3,2,1,0], 3)