export const getYears = (year) => {
  let yearArray = [];
  let currentYear = new Date().getFullYear();
  for (let i = year; i <= parseInt(currentYear - 2); i++) {
    yearArray.push(i);
  }
  return yearArray;
};
