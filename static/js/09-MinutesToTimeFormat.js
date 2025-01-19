function convertToTime(minutes) {
  let hour = minutes / 60;
  hour = Math.floor(hour);
  let minute = Math.abs(hour * 60 - minutes);
  stringMinutes = minute.toString();
  if (stringMinutes.length === 1) {
    return `${hour}:0${minute}`;
  } else if (stringMinutes.length === 2) {
    return `${hour}:${minute}`;
  }
}

console.log(convertToTime(125));