/*
   Find the logic of transformation that converts the following i/p to o/p and program it.

Abbreviation meaning:

i/p - Input

o/p - Output

sample 1

i/p: But, why?

o/p: But,? yhw

sample 2

 i/p: Hi, my name is ted. I am fine

 o/p: Hi, ym name si ted. I am enif

Input Format
The input contains a single string S.

Output Format
Print the output by figuring out the logic.

Example 1
Input

accio job

Output

accio boj

Explanation

The resulting output using the logic




*/
function FindLogic(str){
	// do not console.log her
	const arr = str.split(" ");
	for(let i=0;i<arr.length;i++){
		if(i%2){
			arr[i]=arr[i].split('').reverse().join('');
		}
	}
	return arr.join(" ");
	
}
