class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dataDict = {}
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if (diff in dataDict) {
                return [dataDict[diff], i]
            }
            dataDict[nums[i]] = i
        }
    }
}
