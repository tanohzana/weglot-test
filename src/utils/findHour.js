import fs from 'fs';
import findHourInDay from './findHourInDay';
import arrangeDays from './arrangeDays';

const findHour = (filename) => {
  const fileData = fs.readFileSync(`${__dirname}/../../data/${filename}`, 'utf8');
  const dataFormatted = arrangeDays(fileData);

  for (let i=1; i<=5; i++) {
    if (dataFormatted[`${i}`]) {
      dataFormatted[`${i}`].sort((a, b) => (a.start > b.start) ? 1 : -1);
    }
  }

  for (let i=1; i<=5; i++) {
    const hourInDay = findHourInDay(dataFormatted[`${i}`]);

    if (hourInDay) {
      return `${i} ${hourInDay}`;
    }
  }
};

export default findHour;
