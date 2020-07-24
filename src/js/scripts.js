document.addEventListener('DOMContentLoaded', () => {

  console.log('Hello from main after DOMContentLoaded');


  // плавная прокрутка по якорю
  const scrollTo_Anchors = document.querySelectorAll('a[href^="#"]')

  for (let scrollTo_Anchor of scrollTo_Anchors) {
    scrollTo_Anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const scrollTo_ID = scrollTo_Anchor.getAttribute('href').substr(1)

      document.getElementById(scrollTo_ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // подключаем стили
  //= header.js


})
