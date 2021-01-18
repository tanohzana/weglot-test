import getDateWithHours from './getDateWithHours';

const arrangeDays = (data) => {
  return data.split('\n').reduce((acc, curr) => {
    let hourParts = curr.split(' ');
    let day = hourParts[0];

    if (!acc[day]) {
      acc[day] = [];
    }

    let timeParts = hourParts[1].split('-');

    let time = { start: getDateWithHours(timeParts[0]), end: getDateWithHours(timeParts[1]) };
    let timeShouldBePushed = true;

    acc[day].forEach((currTime, index) => {
      if (!timeShouldBePushed) return;

      if (currTime.start < time.start && currTime.end > time.end) {
        timeShouldBePushed = false;
      }

      if (currTime.start > time.start && currTime.end < time.end) {
        acc[day][index] = time;
        timeShouldBePushed = false;
      }
    });

    if (timeShouldBePushed) {
      acc[day].push(time);
    }

    return acc;
  }, {});
};

export default arrangeDays;
