import differenceInHours from 'date-fns/differenceInHours';
import addMinutes from 'date-fns/addMinutes';
import format from 'date-fns/format';

const DAY_START = new Date().setHours(8, 0, 0, 0);
const DAY_END = new Date().setHours(17, 59, 0, 0);
const FIRST_HOUR = '08:00-08:59';

const findHourInDay = (hours) => {
  if (!hours.length || (hours[0].start > DAY_START && differenceInHours(hours[0].start, DAY_START) >= 1)) {
    return FIRST_HOUR;
  }

  for (let i=0; i<hours.length; i++) {
    if (hours[i+1]) {
      let diff = differenceInHours(hours[i+1].start, hours[i].end);

      if (diff >= 1) {
        let meetingStartTime = addMinutes(hours[i].end, 1);
        let meetingEndTime = addMinutes(hours[i].end, 60);

        return `${format(meetingStartTime, 'HH:mm')}-${format(meetingEndTime, 'HH:mm')}`;
      }
    }
  }

  if (hours[hours.length-1].end < DAY_END && differenceInHours(hours[hours.length-1].end, DAY_END) >= 1) {
    let meetingEndTime = addMinutes(hours[hours.length-1].end, 59);
    return `${format(hours[hours.length-1].end, 'HH:mm')}-${format(meetingEndTime, 'HH:mm')}`;
  }

  return null;
};

export default findHourInDay;
