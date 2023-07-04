const navLinks = document.querySelector('.nav-links');

const NavbarHandler = ()=>{
    
    if(navLinks.classList.contains('hide-links')){
        navLinks.classList.remove('hide-links');
        navLinks.classList.add('show-links');
        console.log('show');
    }else{
        navLinks.classList.remove('show-links');
        navLinks.classList.add('hide-links');
        console.log('hide');
    }
}