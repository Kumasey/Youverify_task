function stringCompression(str) {
  if (str.length == 0) {
    console.log('Please enter valid string.');
    document.write('Please enter valid string. <br>');
    return;
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  document.write(output, '<br>');

  console.log(output);
}

// INPUTS

stringCompression('');
('<br>');

stringCompression('aaaabbcaabb');
