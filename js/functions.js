const checkString = (string, length) => string.length <= length;
checkString ('Hello', 5);

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ','');
  return string === string.split('').reverse().join('');
};
checkStringPalindrome('Madam, I’m Adam ');
