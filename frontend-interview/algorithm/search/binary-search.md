---
layout: default
title: Binary Search
permalink: /frontend-interview/algorithm/search/binary-search
---

# 二分搜索 - Binary Search

## 什么是二分搜索
二分搜索为查找某个元素是否在集合中的一种方法，其特点是时间复杂度为`O(log2N)`，循环方法空间复杂度`O(1)`，递归方法空间复杂度`O(log2N)`，要求**集合中被搜索的元素必须有序**。

二分搜索的基本思路是，设集合array为升序排列，目标元素为target

1. 定义一个左指针`left`指向集合(`array`)的第一个元素，定义一个右指针`right`指向集合的最后一个元素。初始时, `left = 0`, `right = n - 1`, `n`为集合元素个数。
2. 取左指针和右指针的中点，记为`mid`，则`mid = left + (right - left) / 2`
3. 当左指针不超过右指针时，即`left <= right`时：
    - 若中间元素小于目标元素(`array[mid] < target`), 说明目标元素只可能存在于中间元素的右侧，则让左指针右移，指向mid的下一位（`left = mid + 1`)
    - 若中间元素大于目标元素(`array[mid] > target`), 说明目标元素只可能存在于中间元素的左侧，则让右指针左移，指向mid的上一位（`right = mid - 1`)
    - 若中间元素与目标元素相等，则返回中间元素的下标`mid`
4. 重复2、3，直至左指针超过右指针，则说明该集合中不存在目标元素 


## 二分搜索循环实现
<details markdown="1">
<summary markdown="span">思路</summary>

```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) return -1;

        int left = 0, right = nums.length - 1;

        while (left <= right) {
            // 为什么不写mid = (left + right) / 2是为了防止left + right溢出
            int mid = left + (right - left) / 2;

            
            if (nums[mid] < target) { // 中间元素小于目标元素，左指针右移
                left = mid + 1;
            } else if (nums[mid] > target) { // 中间元素大于目标元素，右指针左移
                right = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
```
</details>

## 二分搜索递归实现
<details markdown="1">
<summary markdown="span">思路</summary>

```java
class Solution {
    public int search(int[] nums, int target) {
        return binarySearch(nums, 0, nums.length - 1, target);
    }

    private int binarySearch(int[] nums, int left, int right, int target) {
        if (left > right) return -1;

        int mid = left + (right - left) / 2;
        
        if (nums[mid] < target) { // 中间元素小于目标元素，左指针右移
            return binarySearch(nums, mid + 1, right, target);
        } else if (nums[mid] > target) { // 中间元素大于目标元素，右指针左移
            return binarySearch(nums, left, mid - 1, target);
        } else {
            return mid;
        }
    }
}
```

</details>

## 证明二分搜索的正确性
```
以循环法为例：

设P(N)为当右指针right-左指针left == N时，二分查找成立。

对于N == 0，显然，二分查找成立。

设P(N)成立，下面证明P(N + 1)成立：




```


## 若集合为升序，求目标元素第一次出现的位置，若未找到，返回-1

## 若集合为升序，求目标元素最后一次出现的位置，若未找到，返回-1


## 插值搜索

