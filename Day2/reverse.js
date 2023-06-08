function reverse(arr,s,e){
    while(s<=e){
        let temp = arr[s];
        arr[s]= arr[e];
        arr[e]=temp;
    }
}
