from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        def check_block(data_map, data, code_key):
            if data == ".":
                return True
            arr_data = data_map[code_key]
            if data in arr_data:
                return False
            return True

        def formulate_sub_box_code(i, j):
            if i <= 2 and j <= 2:
                return "sb1"
            if i <= 2 and j <= 5:
                return "sb2"
            if i <= 2 and j <= 8:
                return "sb3"
            if i <= 5 and j <= 2:
                return "sb4"
            if i <= 5 and j <= 5:
                return "sb5"
            if i <= 5 and j <= 8:
                return "sb6"
            if i <= 8 and j <= 2:
                return "sb7"
            if i <= 8 and j <= 5:
                return "sb8"
            if i <= 8 and j <= 8:
                return "sb9"

        data_map = {}

        for i in range(len(board)):
            for j in range(len(board[i])):
                data_value = board[i][j]

                row_code = f"r{i}"
                column_code = f"c{j}"
                sb_code = formulate_sub_box_code(i, j)

                if row_code not in data_map:
                    data_map[row_code] = []
                if column_code not in data_map:
                    data_map[column_code] = []
                if sb_code not in data_map:
                    data_map[sb_code] = []

                if (
                    not check_block(data_map, data_value, row_code)
                    or not check_block(data_map, data_value, column_code)
                    or not check_block(data_map, data_value, sb_code)
                ):
                    return False

                if data_value != ".":
                    data_map[row_code].append(data_value)
                    data_map[column_code].append(data_value)
                    data_map[sb_code].append(data_value)

        return True
