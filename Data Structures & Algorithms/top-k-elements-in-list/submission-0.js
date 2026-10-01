class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = {}
        for (let num of nums) {
            if (num in result) {
                result[num] = result[num] + 1
            } else {
                result[num] = 1
            }
        }
        let sorted_result = Object.entries(result)
            .sort(([,a], [,b]) => b - a)
            .slice(0, k)
            .map(([key]) => key)
        return sorted_result;
    }
}
