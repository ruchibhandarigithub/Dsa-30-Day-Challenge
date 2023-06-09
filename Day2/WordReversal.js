function reverseWords(str){
    // write code here
    // use console.log to print outonsons
	const arr = str.split(" ");
	let newStr ='';
	for(let i=0;i<arr.length;i++){
		newStr+=arr[i].split("").reverse().join("")+" ";
	}
	console.log(newStr);
 }
