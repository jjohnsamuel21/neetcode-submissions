class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        let sorted_arr = [...new Set(nums)].sort((a, b) => a-b)
        let consecutive = 1
        let temp_data = 1
        for (let i = 1; i < sorted_arr.length; i++) {
            if (sorted_arr[i-1] + 1 === sorted_arr[i]) {
                temp_data += 1
            } else {
                if (temp_data > consecutive) consecutive = temp_data;
                temp_data = 1
            }
        }
        if (temp_data > consecutive) consecutive = temp_data
        return consecutive
    }
}
