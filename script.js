const navDialog=document.getElementById('nav-dialog');
const handleMenu=()=>{
    event.preventDefault();
    navDialog.classList.toggle('hidden');
}
// this is a scroller
//isLTR left to right movement
//here only one element is observed at a time when it goes out
// of bound then scroller is disabled from it
const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;
const setUpIntersectionObserver=(element,isLTR,speed)=>{
    const intersectionCallback=(entries)=>{
        const isIntersecting=entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }
    const intersectionObserver=new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
    function scrollHandler(){
        const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;
        let totalTranslate=0;
        if(isLTR){
            totalTranslate=translateX+initialTranslateLTR;
        }
        else{
            totalTranslate=-(translateX+initialTranslateRTL);
        }
        element.style.transform=`translateX(${totalTranslate}px)`;
    }
}
const line1=document.getElementById('line1');
setUpIntersectionObserver(line1,true,0.15);
const line2=document.getElementById('line2');
setUpIntersectionObserver(line2,false,0.15);
const line3=document.getElementById('line3');
setUpIntersectionObserver(line3,true,0.15);
const line4=document.getElementById('line4');
setUpIntersectionObserver(line4,true,0.8);

const dtElements=document.querySelectorAll('dt');
dtElements.forEach(element=>{
    element.addEventListener('click',()=>{
        const ddId=element.getAttribute('aria-controls');
        const ddElement=document.getElementById(ddId);
        const ddArrowIcon=element.querySelector('i');
        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('rotate-180');
    })
})