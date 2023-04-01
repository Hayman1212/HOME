var btn = document.getElementById('totopBtn');
// get the button by calling its name

// get navigation by calling its name
const nav = document.querySelector('.hovereffect-nav');

// get menu button by calling its name
const menuBtn = document.querySelector('.responsivenav-menubtn')

// get menu button by calling its name
const navIcon = document.querySelector('.responsive-homeicon')

// get realx button by calling its class name
const relaxBtn = document.querySelector('.service-relax')

// get bigtext_blogtext by calling its class name
const waveTxt = document.querySelector('.bigtext_blogtext')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {  
    // when the user scroll down for 880px, show btn
    if (document.body.scrollTop > 880 || document.documentElement.scrollTop > 880) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


 // when the user scroll down for 650px, the background will turn white from transparent
 window.addEventListener('scroll', () => {
    if (window.scrollY > 650 ) {
        nav.classList.add('scroll-effect-nav');
        nav.classList.remove('hovereffect-nav');
        menuBtn.classList.add('menubtnScroll');
        navIcon.classList.add('d-none');
    } else if (window.scrollY <= 650) {
        nav.classList.remove('scroll-effect-nav');
        nav.classList.add('hovereffect-nav');
        menuBtn.classList.remove('menubtnScroll');
        navIcon.classList.remove('d-none');
    }
 });


// on-click effect
function totopBtn(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// for relax hover effect
// mouse enter function
function btnEffectRelax(){
    relaxBtn.classList.add('relaxBtn');
}
// mouse leave function
function btnEffectRelaxleave(){
    relaxBtn.classList.remove('relaxBtn');
}

// for wav text effect hover
// mouse enter function
function waveHover(){
    waveTxt.classList.add('wave-textDiv');
}
// mouse leave function
function waveHoverout(){
    waveTxt.classList.remove('wave-textDiv');
}



