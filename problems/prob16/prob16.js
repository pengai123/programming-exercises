function randomString(num) {
  var text = '';
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  for(var i=0; i <= num; i++ )
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  return text;
}

function charTest(string1, string2) {
	if (string1 === string2) {
		return true;
	} else {
		return false;
	}
}

var randString1 = randomString(10);
var randString2 = randomString(10);
console.log('The strings are ' + randString1 + ' and ' + randString2);
console.log(charTest(randString1, randString2));
