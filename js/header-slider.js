// HEADER SLIDE
const slides = document.querySelectorAll('.slide');
const tracks = document.querySelectorAll('.track');
tracks.forEach(track => {
    track.addEventListener('click', e => {
        let index = Array.from(tracks).indexOf(e.target);
        const currentTrack = document.querySelector('.selected-track');
        const currentSlide = document.querySelector('.current');
        const mid_title =document.querySelector('.slide__medium-title');
        const title1 = document.querySelector('.slide__big-title1');
        const title2 = document.querySelector('.slide__big-title2');
        const btn = document.querySelector('.slide__btn');
        const mid_title_2 =document.querySelector('.slide__medium-title_2');
        const title1_2 = document.querySelector('.slide__big-title1_2');
        const title2_2 = document.querySelector('.slide__big-title2_2');
        const btn_2 = document.querySelector('.slide__btn_2');
        if (track.classList.contains('selected-track')) {

        } else {
            currentSlide.classList.remove('current');
            currentTrack.classList.remove('selected-track');
            slides[index].classList.add('current');
            tracks[index].classList.add('selected-track');
      
            
            setTimeout(() => currentSlide.classList.remove('current'))
            setTimeout(() => currentTrack.classList.remove('selected-track'))
        }
        if(index == 1){
            title1_2.classList.toggle('animate__fadeInLeft');
            title2_2.classList.toggle('animate__fadeInUp');
            mid_title_2.classList.toggle('animate__fadeInDown');
            btn_2.classList.toggle('animate__zoomIn');
            title1.classList.remove('animate__fadeInLeft');
            title2.classList.remove('animate__fadeInRight');
            mid_title.classList.remove('animate__fadeInDown');
            btn.classList.remove('animate__zoomIn');
        }if(index == 0){
            title1_2.classList.remove('animate__fadeInLeft');
            title2_2.classList.remove('animate__fadeInUp');
            mid_title_2.classList.remove('animate__fadeInDown');
            btn_2.classList.remove('animate__zoomIn');
            title1.classList.toggle('animate__fadeInLeft');
            title2.classList.toggle('animate__fadeInRight');
            mid_title.classList.toggle('animate__fadeInDown');
            btn.classList.toggle('animate__zoomIn');

        }
/*         if (auto_slide) {
            clearInterval(slide_interval);
            slide_interval = setInterval(nextSlide, slide_time);
        } */
    })

});
