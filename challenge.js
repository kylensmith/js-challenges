// Kyle N. Smith

console.log("Kyle N. Smith")
// Wanting to get better at javascript, while also wanting to work on some coding challenges, I decided to start doing coding challenges in Javascript rather than Ruby and log some results.  I thought I would push them to github so that I would have a record of my progress.



// Questions are broken by the following:
///////////////////////////////////////////



// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure, Nothing in Haskell, undefined in JavaScript.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

function nextItem(xs, item) {
  
  for (i = 0; i < xs.length; i++) { 
    if (xs[i] == item) {
    	return xs[i+1];
    };
    
}
}

// For testing

function countFrom(x) {
	array = []
	for (i = x; i < 100; i++) {
		array.push(i);
		return array
	}
};


// console.log(nextItem(countFrom(1), 12), 13);


///////////////////////////////////////////




// Format a float passed with a decimal to return the dollar figure.

// First solution
function formatMoney(amount){
	var splitter = amount.toString().split('.');
	if(splitter[1]) {
		if(splitter[1][0] && splitter[1][1]) {
			return "$" + splitter[0] + "." + splitter[1][0] + splitter[1][1];
		} else if (splitter[1][0]) {
			return "$" + splitter[0] + "." + splitter[1][0] + "0";
		}
		else { return "$" + splitter[0] + ".00";}
	}
	else {
		return "$" + splitter[0] + ".00"
	}
}
// second solution
function newFormatMoney(amount) {
	return "$" + amount.toFixed(2);
}





///////////////////////////////////////////














// The numberOfOccurrences function must return the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function(num) {
var counter = 0;
  for (i = 0; i < this.length; i++) {
    if (this[i] == num) {
    counter++;
    }
  } 
return counter;
}









///////////////////////////////////////////





// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.


function tickets(peopleInLine){
	var bill25 = 0;
	var bill50 = 0;
	var bill100 = 0;
	var bills = (bill25, bill50, bill100)
	for (i = 0; i < peopleInLine.length; i++) {
		var billSize = peopleInLine[i];

		if (billSize === 25) {
			bill25++;
		}
		else if (billSize === 50){
			bill50++;
			if (bill25 >= 1) {
				bill25 -= 1;
			}
			else {
				return "NO";
			}
		}
		else if (billSize === 100){
			bill100++;
			
			if (bill50 >=1 && bill25 >=1){
				bill25 -= 1;
				bill50 -= 1;
			}
			else if (bill25 >=3){
				bill25 -= 3;
			}
			else if (bill50 >=1 && bill25 >=1){
				bill25 -= 1;
				bill50 -= 1;
			}
			else {
				return "NO";
			}

		}
	}
	return "YES"; 
} 











///////////////////////////////////////////





// Part 1
// Implement an algorithim to determine if a string has all unique characters
function checkList(string){
	xcounter = 0;
	console.log("Start Function")
	for (i = 0; i < string.length; i++){
		for (b = 0; b < string.length; b++){
			if (string[i] == string[b] ) {
				xcounter++;
			}			
		}
	}
	if (xcounter === string.length) {
		return "No duplicates";
	}
	else {
		return "Duplicates";
	}
}






// Part 2
// Implement an algorithim to determine if a string has all unique characters
// What if you cannot use an additional data structure?
function uniqueList(string){
	for (i = 0; i < string.length; i++){
		for (b = 0; b < string.length; b++){
			if (string[i] == string[b] && i !== b) {
				return false;
			}			
		}
	}
	return true;
}









///////////////////////////////////////////









// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
	str = str.replace(/([aeiou])/gi, "");	
  return str;
}



















