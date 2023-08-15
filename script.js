// ================================== menu =============================================

document.getElementById('menu').addEventListener('click', function toggle() {

    document.getElementsByClassName('links')[0].classList.add('margin')
})

document.getElementById('close').addEventListener('click', function toggle() {

    document.getElementsByClassName('links')[0].classList.remove('margin')

})

let a = Array.from(document.querySelectorAll('.links ul li'))

for (let x of a) {
    x.addEventListener('click', function toggle() {
        document.getElementsByClassName('links')[0].classList.remove('margin')
    })
}

// ======================================= new-menu ===========================

document.getElementById('new-menu').addEventListener('click', function toggle() {

    document.getElementsByClassName('links')[0].classList.add('margin')
    document.getElementById('new-navbar').style.display = 'none'
})

document.getElementById('close').addEventListener('click', function toggle() {

    document.getElementsByClassName('links')[0].classList.remove('margin')
    document.getElementById('new-navbar').style.display = 'flex'

})

let b = Array.from(document.querySelectorAll('.links ul li'))

for (let x of b) {
    x.addEventListener('click', function toggle() {
        document.getElementsByClassName('links')[0].classList.remove('margin')
    })
}

// ========================================================= navbar scoll =====================================

let navbar = document.getElementById('new-navbar')
let mt = document.getElementById("popular");
let position = mt.offsetTop ;
let previous = window.scrollY;
console.log(position)

document.addEventListener('scroll', function x() {

    if (window.scrollY >= position) {
        if (window.scrollY > previous) {
            // console.log('downwards')
            navbar.classList.remove('new-display')
        }
        else {
            navbar.classList.add('new-display')
        }
    }

    else{
        navbar.classList.remove('new-display')
    }

    previous = window.scrollY
})

// =================================================== password ==============================================

let eye = document.getElementsByClassName('eye')[0]
eye.addEventListener('click',function eye(){

    let eyeOn = document.getElementsByClassName('ri-eye-line')[0]
    let eyeOff = document.getElementsByClassName('ri-eye-off-line')[0]
    let password = document.getElementsByClassName('password-type')[0]
    let passwordAttribute = password.attributes[0]

    if(eyeOff.style.display == 'block'){
        eyeOff.style.display = 'none'
        eyeOn.style.display = 'block'
        passwordAttribute.value = 'text'
    }
    else{
        eyeOff.style.display = 'block'
        eyeOn.style.display = 'none'
        passwordAttribute.value = 'password'
    }

})
