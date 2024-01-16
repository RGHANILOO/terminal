// time element of the terminal
const lastLoginTime = document.getElementById('last-login-time')
const date = new Date();
const options = {
    weekday :'short',
    month: 'short',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12: false,
}
const formattedDate = date.toLocaleDateString('en-GB', options)
lastLoginTime.textContent = formattedDate.replace(',', '');

