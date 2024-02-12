//sctoll btn
const goTopBtn = document.querySelector('.scrollTop');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200){
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});






