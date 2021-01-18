import fs from 'fs';
import findHour from '../findHour';

describe ('findHour function', () => {
  it ('returns the right interval for the meeting', () => {
    const EXPECTED_MEETING = fs.readFileSync(`${__dirname}/../../../data/output5.txt`, 'utf8');
    const meeting = findHour('input5.txt');

    expect(meeting).toBe(EXPECTED_MEETING);
  });
});