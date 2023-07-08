
const checkString = (string, length) => string.length <= length;
checkString('Hello', 5);

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};
checkStringPalindrome('Madam, I’m Adam ');

//Задача 5 раздел

const getMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};
const checkWorkingTime = (startDay, endDay, startMeeting, meetingDuration) => {
  startDay = getMinutes(startDay);
  endDay = getMinutes(endDay);
  startMeeting = getMinutes(startMeeting);
  const endMeeting = startMeeting + meetingDuration;
  if (startMeeting < startDay || endMeeting < endDay) {
    return true;
  }
  return false;
};

checkWorkingTime('08:00', '17:30', '14:00', 90);
checkWorkingTime('8:0', '10:0', '8:0', 120);
checkWorkingTime('08:00', '14:30', '14:00', 90);
checkWorkingTime('14:00', '17:30', '08:0', 90);
checkWorkingTime('8:00', '17:30', '08:00', 900);
