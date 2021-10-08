// Javascript program to check if given
// two strings are at one away.

function isEditDistanceOne(String1, String2) {
  // Find lengths of given strings
  let s = String1.length,
    g = String2.length;

  if (Math.abs(s - g) > 1) return false;

  // Count of edits
  let count = 0;
  let i = 0,
    j = 0;

  while (i < s && j < g) {
    if (String1[i] != String2[j]) {
      if (count == 1) return false;
      if (s > g) i++;
      else if (s < g) j++;
      else {
        i++;
        j++;
      }

      count++;
    }

    // If current characters match
    else {
      i++;
      j++;
    }
  }

  // If last character is extra
  // in any string
  if (i < s || j < g) count++;

  return count == 1;
}

let String1 = 'pale';
let String2 = 'ple';
let String3 = 'pale';
let String4 = 'bake';

// OUTPUT OF EITHER CASE

if (isEditDistanceOne(String1, String2)) document.write('True');
else document.write('False');

if (isEditDistanceOne(String3, String4)) console.log('True');
else console.log('False');
