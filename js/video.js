const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-cotainer');

btn.addEventListener('click',function(){
    if( !btn.classList.contains('right')) {
      btn.classList.add('right')
        video.pause();
    }
  else{
      btn.classList.remove('right')
      video.play()
  }
});

