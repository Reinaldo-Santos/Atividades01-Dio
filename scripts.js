

function changeMode() {
  changeClasses();
  changeText();
}
function changeClasses() {
    
    button.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    h1Testo.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const ligthMode = "Ligth Mode";
    const darkMode = "Dark Mode";
    if (h1Testo.classList.contains(darkModeClass)) {
        button.innerHTML=ligthMode;
        h1Testo.classList.add('branco');
        h1.innerHTML=darkMode + " ON"
    }else{
    button.innerHTML=darkMode;
    h1.innerHTML=ligthMode + " ON"
    }
}


const button=document.getElementById('mode-selector');
const darkModeClass= 'dark-mode';
const h1= document.getElementsByTagName('h1')[0];
const h1Testo= document.getElementById('page-title');
const body=document.getElementsByTagName('body')[0];
const footer=document.getElementsByTagName('footer')[0];

button.addEventListener('click',changeMode);
