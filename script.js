const button = document.querySelector('.icon-menu-button');
let check = 0;

button.addEventListener('click', function() {
    if(check==0) {
        let bier = document.querySelector('.navigation');
        bier.style.display="block";
        check =1;
    } else {
        let bier = document.querySelector('.navigation');
        bier.style.display="none";
        check = 0;
    }
    
});
