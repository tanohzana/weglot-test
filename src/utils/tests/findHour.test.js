import findHour from '../findHour';

describe ('findHour function', () => {
  it ('returns the right interval for the meeting', () => {
    const EXPECTED_MEETING = '3 13:18-14:17';
    const meeting = findHour('input5.txt');

    expect(meeting).toBe(EXPECTED_MEETING);
  });
});