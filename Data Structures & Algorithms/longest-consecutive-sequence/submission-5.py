class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        set_data = sorted(list(set(nums)))
        consecutive = 1
        temp_value = 1
        for i in range(1, len(set_data)):
            if set_data[i-1] + 1 == set_data[i]:
                temp_value += 1
            else:
                if temp_value > 1 and consecutive < temp_value:
                    consecutive = temp_value
                temp_value = 1
        if temp_value > consecutive:
            consecutive = temp_value
        return consecutive




        