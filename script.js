function convertToRoman(num) {
	if(num <= 0)
		return "";
	
  	const map = [
     ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
    ];

  //your code here
	let result="";
	for(const [roman, value] of map){
          while(num >= value){
              result += roman;
			  num -= value ;	  
		  }
	}
	return result;
}


console.log(convertToRoman(36));
alert(convertToRoman(36));



// do not edit below this line
module.exports = convertToRoman