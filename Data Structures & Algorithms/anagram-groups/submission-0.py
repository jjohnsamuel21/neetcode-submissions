class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        data_dict = {}
        for stri in strs:
            sorted_str = "".join(sorted(stri))
            if sorted_str in data_dict:
                data_dict[sorted_str] = data_dict[sorted_str] + [stri]
            else:
                data_dict[sorted_str] = [stri]
        return list(data_dict.values())
        