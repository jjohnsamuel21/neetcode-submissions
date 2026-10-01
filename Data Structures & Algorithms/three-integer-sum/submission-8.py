class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
      nums.sort()
      print(nums)
      result = []
      dup_values = {}
      for i in range(len(nums)):
         loop_val = nums[i]
         left = i + 1; right = len(nums) - 1

         if loop_val > 0:
            break
         while left < right:
            sum_value = nums[left] + nums[right] + loop_val

            if sum_value > 0:
               right -= 1
            elif sum_value < 0:
               left += 1
            else:
               sorted_arr = sorted([loop_val, nums[left], nums[right]])
               string_change = "".join(map(str, sorted_arr))
               if string_change not in dup_values:
                  result.append(sorted_arr)
                  dup_values[string_change] = sorted_arr
               left += 1
               right -= 1
      return result