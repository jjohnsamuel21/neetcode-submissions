class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        data_dict = {}
        for num in nums:
            if num in data_dict:
                data_dict[num] += 1
            else:
                data_dict[num] = 1
        
        result = [key for key, value in sorted(data_dict.items(), key = lambda x: x[1], reverse = True)][:k]
        return result
        