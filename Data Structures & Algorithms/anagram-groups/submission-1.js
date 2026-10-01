class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let dataDict = {}
        for (let stri of strs) {
            let sortedStr = stri.split("").sort().join("")
            if (sortedStr in dataDict) {
                dataDict[sortedStr] = dataDict[sortedStr].concat([stri])
            } else {
                dataDict[sortedStr] = [stri]
            }
        }
        return Object.values(dataDict)
    }
}
