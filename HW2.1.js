//User can add any string with using next characters () { } '"

var str = prompt('Строка ниже пройдет проверку на закрытие всех кавычек.\n Вы можете изменить её до начала проверки.',
 "{ asd: 133, wee: function() { } }");

char1 = '"'; 
char2 = "'";
char3 = '(';
char4 = ')'; 
char5 = '{';
char6 = '}';

//The function need to find repeated character in string from "prompt"
//Данну функцію я знайшов упросторах інету, так як мені необхідно було підрахувати символи які повторюються, але як це зробити не знав.

function char_count(str, letter) {
	(function (){
	
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var res1 = console.log(char_count(str, char1));
var res2 = console.log(char_count(str, char2));
var res3 = console.log(char_count(str, char3));
var res4 = console.log(char_count(str, char4));
var res5 = console.log(char_count(str, char5));
var res6 = console.log(char_count(str, char6));

// After that i want to divide the each "char" without change
// Отримані значена я хочу розділити на 2. Ті що поділяться на 2 без остачі будуть True ті що матимуть остачу будуть False.

 
/*if ((res1 % 2) !== 0) {
//if (i % 2 == 0) continue;
	alert( 'Ищите ошибку с символом:' + char1);
} 
else if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом:' + char2);
}
else if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом:' + char3);
}
else if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом:' + char4);
}
else if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом:' + char5);
}
else if ((res1 % 2) !== 0) {
	alert( 'Ищите ошибку с символом:' + char6);
}
else {
	alert( 'Все в порядке!');
}


*/




//User can add any string with using next characters () { } '"

var str = prompt('Строка ниже пройдет проверку на закрытие всех кавычек.\n Вы можете изменить её до начала проверки.',
 "function() {");


var char1 = '"', 
char2 = "'",
char3 = '(',
char4 = ')', 
char5 = '{',
char6 = '}';

//The function need to ;find repeated character in string from "prompt"
//Данну функцію я знайшов упросторах інету, так як мені необхідно було підрахувати символи які повторюються, але як це зробити не знав.

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
console.log(res1, res2);

if ((res1 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char1);
} 
else if ((res2 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char2);
}
else if ((res3 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char3);
}
else if ((res4 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char4);
}
else if ((res5 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char5);
}
else if ((res6 % 2) != 0) {
	alert( 'Ищите ошибку с символом:' + char6);
}
else {
	alert( 'Все в порядке!');
}