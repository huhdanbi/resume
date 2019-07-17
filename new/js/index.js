/* shadow */
// const scrollCtx = document.querySelector('#scrollCv');
// const barElem = scrollCtx.querySelectorAll('.bar');
// const titElem = scrollCtx.querySelectorAll('.tit_scroll');
// const progressElem = scrollCtx.querySelectorAll('.cont_progress');

// for(let i=0;i<barElem.length;i+=1){
//   document.addEventListener('mousemove', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     barElem[i].style.top = `${y/180}px`;
//     barElem[i].style.left = `${125 - (x/100)}px`;
    
//     titElem[i].style.top = `${40 - (y/180)}px`;
//     titElem[i].style.left = `${125 - (x/500)}px`;

//     // progressElem[i].style.top = `${140 - (y/180)}px`;
//     // progressElem[i].style.left = `${125 - (x/180)}px`;
//     // document.querySelectorAll('.tit_scroll')[0].style.textShadow = `${x/100}px -${y/100}px ${(x+y)/100}px rgba(0,0,0,1)`;
//   });
// }



const windowWid = document.documentElement.clientWidth;
const topCV = document.querySelectorAll('.top_cv')[0];
const scrollBox = document.querySelectorAll('.box_progress ')[0];
const scrollBG = scrollBox.querySelectorAll('.scroll_progress')[0];

const scrollProgress = () =>{
  const windowHeight = document.documentElement.clientHeight;
  const docHeight = document.documentElement.scrollHeight;

  if( (window.scrollY)/200 > 0 ){
    const scrollTop = (window.scrollY);
    topCV.style.opacity = 1 - (scrollTop/450);
    
    return `${(scrollTop / (docHeight-windowHeight)) * 100}%`;
  }
};

const setProgressEvt = () => {
  const windowWid = document.documentElement.clientWidth;
  const progress = scrollProgress();
  if( windowWid <= 580 ){
    scrollBox.classList.add('m_progress');
    scrollBG.style.width = progress;
    scrollBG.style.height = '8px';
    scrollBG.style.transition = 'width .5s';
  }else{
    scrollBox.classList.remove('m_progress');
    scrollBG.style.height = progress;
    scrollBG.style.width = '8px';
    scrollBG.style.transition = 'height .5s';
  }
}

setProgressEvt();

window.addEventListener('resize', () => {
  setProgressEvt();
});

document.addEventListener('scroll', () => {
  setProgressEvt();
});



