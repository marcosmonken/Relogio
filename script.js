const displayClock = document.querySelector('.digital-clock');
const displayDate = document.querySelector('.display-date');

const formatUnit = unit => `0${unit}`.slice(-2);

const clockHTML = (hours, minutes, seconds) => `
    <span>${formatUnit(hours)}</span> :
    <span>${formatUnit(minutes)}</span> :
    <span>${formatUnit(seconds)}</span>
`;

const dateHTML = (day, month, year) => `
    <span>${formatUnit(day)}</span> /
    <span>${formatUnit(month)}</span> /
    <span>${formatUnit(year)}</span>
`;

const clockTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    displayClock.innerHTML = clockHTML(hours, minutes, seconds);

    displayDate.innerHTML = dateHTML(day, month, year);

}

clockTime();
setInterval(clockTime, 1000);