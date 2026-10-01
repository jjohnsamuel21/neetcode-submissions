class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hash_map = {}
        for (let i = 0; i < numbers.length; i ++) {
            const difference = target - numbers[i]
            if (difference in hash_map) {
                return [hash_map[difference], i + 1]
            }
            hash_map[numbers[i]] = i + 1
        }
    }
}
