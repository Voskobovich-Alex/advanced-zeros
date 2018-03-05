module.exports = function getZerosCount(number, base) {

var k = 0;
var l = 2;
var nok = new Array();
	do {
 		if (base % l == 0) {
  			nok[k] = l;
  			k++;
  			base = base / l;
 		} else {
  			l++;
	 }
	}
		while (l < base);
			nok[k] = l; 

var counter = 0;
  for (var i = l; number/i >= 1; i *= l){
  	 counter += Math.trunc(number/i);

  }
	
  return counter;


};