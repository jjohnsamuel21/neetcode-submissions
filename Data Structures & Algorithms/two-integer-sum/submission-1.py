class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        data_dict = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in data_dict:
                return [data_dict[diff], i]
            data_dict[num] = i
        