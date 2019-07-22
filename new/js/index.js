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
const navElem = document.querySelectorAll('.wrap_nav')[0];
const evtArr = ['resize', 'scroll'];
let scrollState = true;

//get window height percentage
const scrollProgress = (scrollTop) =>{
  const windowHeight = document.documentElement.clientHeight;
  const docHeight = document.documentElement.scrollHeight;

  return `${(scrollTop / (docHeight-windowHeight)) * 100}%`;
};

//scroll && resize event
const setProgressEvt = (scrollTop) => {
  const windowWid = document.documentElement.clientWidth;
  const progress = scrollProgress(scrollTop);

  if( scrollTop/200 > 0 ) topCV.style.opacity = 1 - (scrollTop/450);

  if( windowWid <= 580 ){
    navElem.classList.remove('fix');
    scrollBox.classList.add('m_progress');
    scrollBG.style.width = progress;
    scrollBG.style.height = '8px';
    scrollBG.style.transition = 'width .5s';
  }else if(windowWid <= 1100 && windowWid >= 750 ){
    navElem.classList.add('fix');
  }else{
    navElem.classList.remove('fix');
    scrollBox.classList.remove('m_progress');
    scrollBG.style.height = progress;
    scrollBG.style.width = '8px';
    scrollBG.style.transition = 'height .5s';
  }
}

//set evt 
const setMenuAddClass = () => {
  const conHeight = document.querySelectorAll('.mid_cv')[0].offsetTop;
  
  if( (window.scrollY >= conHeight) && scrollState ){
    navElem.classList.add('on');
    scrollState = false;
  }else if( (window.scrollY <= conHeight) && !scrollState ){
    navElem.classList.remove('on');
    scrollState = true;
  }
}

setProgressEvt();
setMenuAddClass();

for(let i=0;i<evtArr.length;i+=1){
  window.addEventListener(evtArr[i], () => {
    const scrollTop = (window.scrollY);

    setMenuAddClass();
    setProgressEvt(scrollTop);
  });
  
}

