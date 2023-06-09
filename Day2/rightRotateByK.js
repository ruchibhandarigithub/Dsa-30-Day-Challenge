//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,k] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.leftRotate(arr,k,n);
        let s = "";
        for(let it of arr){
            s+=it+" ";
        }
        console.log(s);
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} n
*/

class Solution {
    reverse(arr,s,e){
        while(s<=e){
            let temp = arr[s];
            arr[s]= arr[e];
            arr[e]=temp;
        }
    }
    rightRotate(arr,k,n){
       //code here
       //revsre first k element
       reverse(arr,0,n-k-1);
       //reverse n-k element
       reverse(arr,n-k,n-1);
       //revsre the whole array;
       reverse(arr,0,n-1);
    }
    
}
