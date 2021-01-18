const getDateWithHours = (timeString) => {
  let timeParts = timeString.split(':');
  let date = new Date();

  date.setHours(timeParts[0], timeParts[1]);

  return date;
};

export default getDateWithHours;
