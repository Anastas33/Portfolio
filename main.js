// Плавное прокручивание

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// смена цвета сайта

// document.getElementById('themeToggle').addEventListener('click', function () {
//     const body = document.getElementById('auto-mid');
//     if (body.classList.contains('dark-theme')) {
//         body.classList.remove('dark-theme');
//         body.classList.add('light-theme');
//     } else {
//         body.classList.remove('light-theme');
//         body.classList.add('dark-theme');
//     }
// })