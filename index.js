let isDOBopen = false;
let dateofBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialtextEl = document.getElementById("initialtext");
const afterDOBBtntxtEl = document.getElementById("afterDOBBtntxt");
const dobbtnEl = document.getElementById("dobbtn");
const dobEl = document.getElementById("dob");
const yearEl = document.getElementById("years");
const monthEl = document.getElementById("Months");
const DayEl = document.getElementById("Days");
const HourEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minute");
const SecondsEl = document.getElementById("Seconds");
const maketwodigitnumber = (number) => {
  return number > 9 ? number : `0${number}`;
};

const toggleDateOfBirthselector = () => {
  if (isDOBopen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBopen = !isDOBopen;
  console.log("toggle", isDOBopen);
};
const UpdateAge = () => {
  const CurrentDate = new Date();
  const DateDiff = CurrentDate - dateofBirth;
  const year = Math.floor(DateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((DateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor((DateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((DateDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((DateDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((DateDiff / 1000) % 60);

  yearEl.innerHTML = maketwodigitnumber(year);
  monthEl.innerHTML = maketwodigitnumber(month);
  DayEl.innerHTML = maketwodigitnumber(day);
  HourEl.innerHTML = maketwodigitnumber(hours);
  MinutesEl.innerHTML = maketwodigitnumber(minutes);
  SecondsEl.innerHTML = maketwodigitnumber(seconds);
};
const localStorageGettter = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");
  const hours = localStorage.getItem("hours");
  const minutes = localStorage.getItem("minutes");
  const seconds = localStorage.getItem("seconds ");
  if (year && month && date && hours && minutes && seconds) {
    dateofBirth = new Date(year, month, date, hours, minutes, seconds);
  }
  UpdateAge();
};
const contentToggler = () => {
  if (dateofBirth) {
    initialtextEl.classList.add("hide");
    afterDOBBtntxtEl.classList.remove("hide");
  } else {
    afterDOBBtntxtEl.classList.add("hide");
    initialtextEl.classList.remove("hide");
  }
};

const setDOBhandler = () => {
  const datestring = dobEl.value;
  dateofBirth = datestring ? new Date(datestring) : null;

  if (dateofBirth) {
    localStorage.setItem("year", dateofBirth.getFullYear());
    localStorage.setItem("month", dateofBirth.getMonth());
    localStorage.setItem("date", dateofBirth.getDate());
    localStorage.setItem("Hours", dateofBirth.getHours());
    localStorage.setItem("Minutes", dateofBirth.getMinutes());
    localStorage.setItem("Seconds", dateofBirth.getSeconds());

    initialtextEl.classList.add("hide");
    afterDOBBtntxtEl.classList.remove("hide");
    setInterval(() => UpdateAge(), 1000);
  } else {
    afterDOBBtntxtEl.classList.add("hide");
    initialtextEl.classList.remove("hide");
  }
};
localStorageGettter();

settingCogEl.addEventListener("click", toggleDateOfBirthselector);
dobbtnEl.addEventListener("click", setDOBhandler);
