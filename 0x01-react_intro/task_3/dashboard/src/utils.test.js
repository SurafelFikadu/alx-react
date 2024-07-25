import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('year output', () => {
  expect(getFullYear()).toBe(2024);
});

test('getfootercopy with false input', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getfootercopy with true input', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getlastesnotification output', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});