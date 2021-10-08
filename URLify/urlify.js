// JavaScript implementation a URLify convertion

var str = 'Mr John Smith ';

// Triming the given string

str = str.trim();

// Replacing all spaces with %20

str = str.replaceAll(' ', '%20');

// OUTPUT

document.write(str);
