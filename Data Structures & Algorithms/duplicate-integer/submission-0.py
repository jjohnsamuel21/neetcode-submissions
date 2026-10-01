class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash_data = {}
        for num in nums:
            if  num in hash_data:
                return True
            else:
                hash_data[num] = 1
        return False
        