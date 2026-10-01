class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash_data = {}
        for (let num of nums) {
            if (Object.keys(hash_data).includes(num.toString())) return true;
            else hash_data[num] = 1
        }
        return false;
    }
}
