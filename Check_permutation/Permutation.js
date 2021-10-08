// Javascript program to check if two strings
// are Permutations of each other

let numberOfCharacters = 256;

/* checking whether two strings
are Permutation of each other */

function stringPermutation(str1, str2) {
  let count1 = Array(numberOfCharacters);
  let count2 = Array(numberOfCharacters);
  count1.fill(0);
  count2.fill(0);
  let i;

  // incrementing count in the corresponding
  // count array

  for (i = 0; i < str1.length && i < str2.length; i++) {
    count1[str1[i]]++;
    count2[str2[i]]++;
  }

  if (str1.length != str2.length) return false;

  // Compare count arrays
  for (i = 0; i < numberOfCharacters; i++)
    if (count1[i] != count2[i]) return false;

  return true;
}

// EITHER CASE OUTPUT
let str1 = 'stringpermutation'.split('');
let str2 = 'permutationstring'.split('');
let str3 = 'permutationstring'.split('');
let str4 = 'permutationstrin'.split('');

if (stringPermutation(str1, str2))
  document.write(
    'String 1: |' + str1 + '| and <br> String 2: |' + str2 + '| are permutable'
  );
else
  document.write(
    'String 1: |' + str1 + '| and String 2: |' + str2 + '| are not permutable'
  );

if (stringPermutation(str3, str4))
  console.log(
    'String 3: |' + str3 + '| and String 4: |' + str4 + '| are permutable'
  );
else
  console.log(
    'String 3: |' + str3 + '| and String 4: |' + str4 + '| are not permutable'
  );
