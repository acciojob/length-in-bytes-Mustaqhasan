const byteSize = (str) => {
  // write your code here
	// let size=TextEncoder().encode(str).length;
	let size=str.length;
	if(size>0){
		return size;
	}else{
		return 0;
	}
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
