// MDN
// The DOMContentLoaded event fires when the initial HTML document 
// has been completely loaded and parsed, without waiting for stylesheets, images, and 
// subframes to finish loading.

// The load event is fired when the whole page has loaded, 
// including all dependent resources such as stylesheets and images.




// plan ahead before coding
// i want to select my button and my video container

// VID 162.
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        // if the button does not have the slide class then add it.
        btn.classList.add('slide')
        // classList checks for the class if the class does NOT EXIST THEN ADD IT. 
        video.pause();
    }
    else{
        btn.classList.remove('slide')
        // if the btn class does exist then remove it 
        video.play();
    }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader');
});
