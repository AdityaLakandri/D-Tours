const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
const slides=document.querySelectorAll(".slide");
const slideIcons=document.querySelectorAll(".slide-icon");
const numberOfSlides=slides.length;
const slider=document.querySelector(".slider")
var slideNumber=0;

//image slider next button and prev button
nextBtn.addEventListener("click",()=>{
        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons)=>{
            slideIcons.classList.remove("active")
        });

    slideNumber++;

    if(slideNumber>(numberOfSlides-1)){
        slideNumber=0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click",()=>{
        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons)=>{
            slideIcons.classList.remove("active")
        });

    slideNumber--;

    if(slideNumber<0){
        slideNumber=numberOfSlides-1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

        var playSlider;
        var repeater=()=>{
            playSlider=setInterval(function(){
                slides.forEach((slide)=>{
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcons)=>{
                    slideIcons.classList.remove("active")
                });

            slideNumber++;

            if(slideNumber>numberOfSlides){
                slideNumber=0;
            }
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        },3000);
            
        }
        repeater();

    //stop the image autoplay on mouseover
    slider.addEventListener("mouseover",()=>{
        clearInterval(playSlider)
    }) ;
    //start image autoplay on mouseout
    slider.addEventListener("mouseout",()=>{
        repeater()
    }) ;


