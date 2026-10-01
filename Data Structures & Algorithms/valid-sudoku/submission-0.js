class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        function checkBlock(dictData, data, codeKey) {
            if (data === ".") return true
            let arrData = dictData[codeKey]
            if (arrData.includes(data)) return false;
            return true
        }

        function formulateSubBoxCode(i, j) {
            if (i <= 2 && j <= 2) return "sb1"
            if (i <= 2 && j <= 5) return "sb2"
            if (i <= 2 && j <= 8) return "sb3"
            if (i <= 5 && j <= 2) return "sb4"
            if (i <= 5 && j <= 5) return "sb5"
            if (i <= 5 && j <= 8) return "sb6"
            if (i <= 8 && j <= 2) return "sb7"
            if (i <= 8 && j <= 5) return "sb8"
            if (i <= 8 && j <= 8) return "sb9"
        }

        let dataMap = {}
        for (let i = 0; i < board.length; i++) {
            let rowData = board[i]
            for (let j = 0; j < rowData.length; j++) {
                let dataValue = board[i][j]
                let rowCode = `r${i}`
                let columnCode = `c${j}`
                let sbCode = formulateSubBoxCode(i, j)
                if (!(rowCode in dataMap)) {
                    dataMap[rowCode] = []
                }
                if (!(columnCode in dataMap)) {
                    dataMap[columnCode] = []
                }
                if (!(sbCode in dataMap)) {
                    dataMap[sbCode] = []
                }

                if (!checkBlock(dataMap, dataValue, rowCode) || !checkBlock(dataMap, dataValue, columnCode) || !checkBlock(dataMap, dataValue, sbCode)) {
                    // console.log(checkBlock(dataMap, dataValue, sbCode), dataMap, dataValue, sbCode, "identifed here")
                    return false
                } 
                if (dataValue !== ".") {
                    dataMap[rowCode].push(dataValue)
                    dataMap[columnCode].push(dataValue)
                    dataMap[sbCode].push(dataValue)
                }
            }
        }
        return true
    }

}
