class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False
        hashed_values = {}
        for i in range(0, len(s)):
            if (s[i] not in hashed_values):
                hashed_values[s[i]] = 0
            hashed_values[s[i]] += 1
            if (t[i] not in hashed_values):
                hashed_values[t[i]] = 0
            hashed_values[t[i]] -= 1
        for value in hashed_values.values():
            if (value != 0):
                return False
            
        return True
        