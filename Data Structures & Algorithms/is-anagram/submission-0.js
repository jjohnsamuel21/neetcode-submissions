class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sorted_s = s.split("").sort().join("")
        let sorted_t = t.split("").sort().join("")
        for (let i = 0; i < sorted_s.length; i++) {
            if (sorted_s[i] !== sorted_t[i]) return false
        }
        return true;
    }
}
