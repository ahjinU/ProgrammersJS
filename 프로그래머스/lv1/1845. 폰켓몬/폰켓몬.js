function solution(nums) {
    let cnt = Math.floor(nums.length/2);
    nums = nums.sort((a,b)=>(a-b));
   for(let i=1;i<nums.length;i++){
       if(nums[i]==nums[i-1]) nums.splice(i--,1);
   }
    if(nums.length<cnt) return nums.length;
    else return cnt;
}