function uniqueString(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == s.charAt(i + 1)) {
      return false;
    }
  }
  return true;
}

input = 'abcd@@';
input1 = 'abcd@';

// EITHER CASE OUTPUT

if (uniqueString(input) == true) {
  document.write('String |' + input + '| is Unique');
} else {
  document.write('String |' + input + '| is not Unique');
}

if (uniqueString(input1) == true) {
  console.log('String |' + input1 + '| is Unique');
} else {
  console.log('String |' + input1 + '| is not Unique');
}
