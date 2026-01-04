function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	const M = obj[0][0], D = obj[1][0], C = obj[2][0],  L = obj[3][0], X = obj[4][0], V = obj[5][0], I = [6][0];

	const map = [[M, 1000], [C + M, 9000], [D, 500], [C + D, 400], [C, 100], [X + C, 90], [L, 50], [X + L, 40], [X, 10], [I + X, 9], [V, 5], [I + V, 4], [I, 1],];

	let res = '';
	for (const [sym, val] of map){
		while (num >= val){
			res += sym;
			num -= val;
		}
	}
	return res;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
