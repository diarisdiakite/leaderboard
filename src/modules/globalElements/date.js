import { DateTime } from './luxon.js';

const getDateTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

const updateDate = () => {
  setInterval(() => {
    document.getElementById('currentDateTime').textContent = getDateTime();
  }, 1000);
};

export default updateDate;