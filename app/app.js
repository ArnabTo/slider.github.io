let slides = document.querySelectorAll(".slide");
let nxtbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".previous");
let currentSlide = 0
let changingSlider = () => {
    
    slides.forEach((slide, index) => {
     //     currentSlide = slide.classList.contains('active') ? index : currentSlide 
       if(slide.classList.contains('active')) {
          currentSlide = index
       }
    })

     slides[currentSlide].classList.remove('active')

     if ( currentSlide === (slides.length - 1)) slides[0].classList.add('active')
     else slides[currentSlide + 1].classList.add('active')
     
     // currentSlide == (slides.length - 1) ? slides[0].classList.add('active') : slides[currentSlide + 1].classList.add('active')
}
  
    let rest = setInterval( changingSlider , 3000);

    let nextSlider = () => {
         clearInterval(rest)
         slides[currentSlide].classList.remove('active')
      
         if(currentSlide == (slides.length - 1)){
          slides[0].classList.add('active')
          currentSlide = 0
         }
         else{
          slides[currentSlide + 1].classList.add('active')
          currentSlide = currentSlide + 1
         }

     //     currentSlide == (slides.length - 1) ? slides[0].classList.add('active') (currentSlide = 0)  : slides[currentSlide + 1].classList.add('active') (currentSlide = currentSlide + 1)

         rest = setInterval( changingSlider , 3000);
    }

    let previousSlider = () => {
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
      
     if(currentSlide === 0){
          slides[slides.length - 1].classList.add('active')
          currentSlide = slides.length - 1
     }
     else{
          slides[currentSlide - 1].classList.add('active')
          currentSlide = currentSlide - 1
     }

     // (currentSlide == 0) ? slides[ slides.length -1 ].classList.add('active') ( currentSlide = slides.length -1) : slides[currentSlide - 1].classList.add('active') (currentSlide = currentSlide - 1)
     
     rest = setInterval( changingSlider , 3000);
}

prevbtn.addEventListener('click' ,previousSlider)
nxtbtn.addEventListener('click' ,nextSlider)

function noi(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[0].classList.add('active')
     currentSlide = 0
}
function noii(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[1].classList.add('active')
     currentSlide = 1
}

function noiii(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[2].classList.add('active')
     currentSlide = 2
}
function noiv(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[3].classList.add('active')
     currentSlide = 3
}
function nov(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[4].classList.add('active')
     currentSlide = 4
}
function novi(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[5].classList.add('active')
     currentSlide = 5
}
function noviii(){
     clearInterval(rest)
     slides[currentSlide].classList.remove('active')
     slides[6].classList.add('active')
     currentSlide = 6
}

clearInterval(rest)