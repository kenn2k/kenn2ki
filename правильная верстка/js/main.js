(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        console.log('123');
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }
        else {header.classList.remove('header_active');}
    };
}());
