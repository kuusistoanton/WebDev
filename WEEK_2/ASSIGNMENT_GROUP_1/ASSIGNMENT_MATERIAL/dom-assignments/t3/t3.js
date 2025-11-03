const output = document.getElementById('target');

const browserNameAndVersion = navigator.userAgent;
const operatingSystem = `<p>Operating System: ${navigator.platform}</p>`;
const screenWidthandHeight = `<p>Screen Width: ${screen.width}, Screen Height: ${screen.height}</p>`;
const availableScreenWidthandHeight = `<p>Available Screen Width: ${screen.availWidth}, Available Screen Height: ${screen.availHeight}</p>`;
const now = new Date();
const dateFormatter = new Intl.DateTimeFormat('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' });
const timeFormatter = new Intl.DateTimeFormat('fi-FI', { hour: '2-digit', minute: '2-digit', hour12: false });
const currentDateAndTime = `<p>Current Date and Time: ${dateFormatter.format(now)} ${timeFormatter.format(now)}</p>`;

output.insertAdjacentHTML('beforeend', browserNameAndVersion);

output.insertAdjacentHTML('beforeend', operatingSystem);

output.insertAdjacentHTML('beforeend', screenWidthandHeight);

output.insertAdjacentHTML('beforeend', availableScreenWidthandHeight);

output.insertAdjacentHTML('beforeend', currentDateAndTime);