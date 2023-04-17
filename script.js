const accordion = document.getElementsByClassName('a-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })

}

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "<write and teach>";
    }, 0);
    setTimeout(() => {
        text.textContent = "<write and teach>";
    }, 4000);
    setTimeout(() => {
        text.textContent = "<write and teach>";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);