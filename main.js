daysOfMonths = {
    JANUARY: 31,
    FEBRUARY: 28,
    MARCH: 31,
    APRIL: 30,
    MAY: 31,
    JUNE: 30,
    JULY: 31,
    AUGUST: 31,
    SEPTEMBER: 30,
    OCTOBER: 31,
    NOVEMBER: 30,
    DECEMBER: 31,
};

MonthsOfYears = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];

currentDay = null;
currentMonth = null;
currentYear = null;


let birthDay = 23;
let birthMonth = 9;
let birthYear = 1996;

let days = 0;
let months = 0;
let years = 0;

// let currentDay = 5;
// let currentMonth = 1;
// let currentYear = 2024;
function setCurrentDate() {
    const currentDate = new Date();
    currentDay = currentDate.getDate();
    currentMonth = currentDate.getMonth() + 1;
    currentYear = currentDate.getFullYear();
}

function getDays() {
    console.log(currentDay, currentMonth, currentYear);
  if (currentDay >= 23) {
    days = currentDay - 23;
  } else {
    days = daysOfMonths[MonthsOfYears[(12 + currentMonth - 2) % 12]] - 23 + currentDay;
  }
}

function getMonths() {
  if (currentDay < 23) {
    currentMonth = currentMonth - 1;
  }

  if (currentMonth >= 9) {
    months = currentMonth - 9;
  } else {
    months = currentMonth + 3;
  }
}

function getYears() {
  if (currentMonth >= 9) {
    years = currentYear - 1996;
  } else {
    years = currentYear - 1996 - 1;
  }
}

function getYearsMonthsDays() {
    setCurrentDate()
    getDays();
    getMonths();
    getYears();
    return `${years} years ${months} month(s) ${days} day(s)`;
}
