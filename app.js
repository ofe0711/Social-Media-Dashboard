const htmlEl = document.getElementsByTagName('html')[0];
const check = document.querySelector('input');

function toggleHandler (e) {
    // console.log(e);
    if (check.checked === true){
        htmlEl.setAttribute('data-theme', 'lightmode');
    } else {
        htmlEl.setAttribute('data-theme', 'darkmode');
    }
}



check.addEventListener('change', toggleHandler);
