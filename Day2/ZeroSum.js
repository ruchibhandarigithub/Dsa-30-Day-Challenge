/*
Given an integer N, your task is to print an array of N elements such that:-

Their sum is 0

All elements are distinct

Difference between maximum and minimum element of the array should be smallest

Input Format
Input contains a single integer N.

Output Format
Print the lexicographically smallest array possible.

i.e Suppose your ans is {1 -1 2 -2 } then lexicographically smallest array will be {-2 -1 1 2}

Example 1
Input

 3
Output

-1 0 1

Example 2
Input

 2
Output

-1 1
*/
function smallestDifferenceArray(N) {
    // return the sorted array 
       var result = [];
   
   // If N is odd, append 0 to the result array
   if (N % 2 !== 0) {
     result.push(0);
     N--;
   }
   
   // Generate the remaining elements of the array
   for (var i = 1; i <= N / 2; i++) {
     result.push(i, -i);
   }
   
   // Print the elements of the result array in lexicographically smallest order
   return result.sort(function(a, b) {
     return a - b;
   });
   }