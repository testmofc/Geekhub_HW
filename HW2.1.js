//User can add any string with using next characters () { } '"

var str = prompt('Предложенная строка кода будет подвергнута проверке на закрытие скобок и кавычек.\n Вы можете ввести свою строку кода до начала проверки.',
 "if (str.charAt(position) == letter) {");


var char1 = '"', 
char2 = "'",
char3 = '(',
char4 = ')', 
char5 = '{',
char6 = '}',
char7 = '[',
char8 =	']';

//The function should find repeated characters in string from "prompt"

function char_count(str, letter) {
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var res1 = char_count(str, char1);
var res2 = char_count(str, char2);
var res3 = char_count(str, char3);
var res4 = char_count(str, char4);
var res5 = char_count(str, char5);
var res6 = char_count(str, char6);
var res7 = char_count(str, char7);
var res8 = char_count(str, char8);


if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом: ' + char1);
} 
else {
	console.log('Все в порядке c символом: ' + ' ' + '\'' + ' ');
}

if ((res2 % 2) !== 0) {
	alert( 'Ищите ошибку с символом: ' + char2);
}
else {
	console.log('Все в порядке c символом2: ' + ' ' + '"' + ' ');
}


if (res3 !== res4) {
	alert( 'Ищите ошибку с символами: ' + char3 + ' ' + char4);
}
else {
	console.log('Все в порядке c символами: ' + ' (' + ' и' + ' ) ');
}


if (res5 !== res6) {
	alert( 'Ищите ошибку с символами: ' + char5 + ' ' + char6);
}
else {
	console.log('Все в порядке c символами: ' + ' {' + ' и' + ' } ');
}


if (res7 !== res8) {
	alert( 'Ищите ошибку с символами: ' + char7 + ' ' + char8);
}
else {
	console.log('Все в порядке c символами: ' + ' [' + ' и' + ' ] ');
}