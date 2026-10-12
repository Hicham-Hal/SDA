function dynamicWindow(arr, s){
    let left = 0;
    let sum = 0;
    let best = Infinity;

    for(let right = 0; right < arr.length; right++){
        sum += arr[right]

        while(sum >= s){
            best = Math.min(best, right - left + 1)
            sum -= arr[left]
            left++;
        } 
    }

    return best === Infinity ? 0 : best

}

console.log(dynamicWindow([2,3,1,2,4,3], 7))