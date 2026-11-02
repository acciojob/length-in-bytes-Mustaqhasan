const byteSize = (str) => {
  // write your code here
	if(str.length>0){
		return str.length
	}else{
		return 0;
	}
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
