class Solution:
        def isPalindrome(self, s: str) -> bool:
                s = re.sub(r'[^a-zA-Z0-9]','', s).lower()
                length_of_s = len(s)
                for i in range(0, len(s)//2):
                    if s[i] != s[length_of_s - 1 - i]:
                        return False
                return True