const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    // console.log('hello');
    this.classList.toggle('open');
    // el toqggle le agrega la clase open cuando identifica que no la tiene 
}
function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
// que reaccione con el click
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
