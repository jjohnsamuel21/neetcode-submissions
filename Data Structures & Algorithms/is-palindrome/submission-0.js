class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let modifiedString = s.replace(/[^a-zA-Z0-9]/g,'').split(" ").join("").toLowerCase();
        let stringLength = modifiedString.length
        for (let i = 0; i < Math.ceil(stringLength / 2); i++) {
            let reverseIndex = stringLength - 1 - i;
            if (modifiedString[i] !== modifiedString[reverseIndex]) {
                return false
            }
        }
        return true;
        
    }
}
