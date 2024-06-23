document.addEventListener('DOMContentLoaded', function () {
    var pagetop = document.getElementById('pagetop');


    window.addEventListener('scroll', function () {
        
        if (window.scrollY > 10) {
            pagetop.style.display = 'block';
        } else {
            pagetop.style.display = 'none';
        }
    });

    // クリックのの処理
    pagetop.addEventListener('click', function (e) {
        e.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


//背景色の変更
const colors = ['rgb(251, 218, 200)','rgb(254, 236, 210)','rgb(255, 252, 219)','rgb(236, 244, 217)','rgb(213, 234, 216)','rgb(212, 236, 234)','rgb(211, 237, 251)','rgb(211, 222, 241)','rgb(210, 204, 230)','rgb(231, 213, 232)','rgb(250, 220, 233)','rgb(250, 219, 218)'];

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        document.body.style.backgroundColor = randomColor;
    });
});