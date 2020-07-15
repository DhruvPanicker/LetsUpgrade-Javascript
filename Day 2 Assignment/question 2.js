/*Q2.Explain with examples the remaining methods of string and array*/

//String Length : The length property returns the length of a string
let text = "xylophone"
console.log(text.length);

//Finding a String in a String :The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
let str="Please find my friend Ram, he is my best friend"
console.log(str.indexOf("friend"));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let str2="Please find my friend Ram, he is my best friend"
console.log(str2.lastIndexOf("friend"));

//Searching for a String in a String: The search() method searches a string for a specified value and returns the position of the match:
let str3 = "Please find my friend Ram, he is my best friend"
console.log(str3.search("friend"))

//Extracting String Parts : 
//slice(start, end) :slice() extracts a part of a string and returns the extracted part in a new string.
let str4 = "xylophone"
console.log(str4.slice(1,6))
//substring(start, end):substring() is similar to slice().The difference is that substring() cannot accept negative indexes.
let str5 = "Apple, Banana, Kiwi";
console.log((str5.substring(9, 15)));

//substr(start,length):substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
let str6 = "Apple, Banana, Kiwi";
console.log(str6.substr(7, 6));

//Replacing String Content : The replace() method replaces a specified value with another value in a string:
str7 = "Please visit Microsoft!";
console.log(str7.replace("Microsoft", "LetsUpgrade"));

//Converting to Upper and Lower Case.A string is converted to upper case with toUpperCase() and to lower case with toLowerCase():
let text2= "Hello Javascript!"
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

//The concat() Method:concat() joins two or more strings:
let text3 = "Hello" + " " + "Ladakh!";
console.log("Hello".concat(" ", "Ladakh!"));

//String.trim():The trim() method removes whitespace from both sides of a string:
let bad = "       Breaking!"
console.log(bad.trim());

//Extracting String Characters
//The charAt() Method:The charAt() method returns the character at a specified index (position) in a string:

let fireNation="Zuko";
console.log(fireNation.charAt(0));

//Converting a String to an Array:A string can be converted to an array with the split() method:
let gang = "Aang,Katara,Sokka,Toph";
console.log(gang.split(","));//split on commas

// Converting Arrays to Strings.The JavaScript method toString() converts an array to a string of (comma separated) array values.

let gang2 = ["Aang","Katara","Sokka","Toph","Zuko"]
console.log(gang2.toString());

//The pop() method removes the last element from an array:
console.log(gang2.pop());

//The push() method adds a new element to an array (at the end):
console.log(gang2.push("Iroh"));
console.log(gang2);

// /The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(gang2.shift());
console.log(gang2);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(gang2.unshift("AvatarAang"));
console.log(gang2);
