
const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline=document.querySelector("[data-cursor-outline]");
 

window.addEventListener("mousemove",function(e){
    const posx=e.clientX;
    const posy=e.clientY;

    cursorDot.style.left=`${posx}px`;
    cursorDot.style.top=`${posy}px`;


    // cursorOutline.style.left=`${posx}px`;
    // cursorOutline.style.top=`${posy}px`;

    cursorOutline.animate({
        left:`${posx}px`,
        top:`${posy}px`
    },{duration: 700 , fill:"forwards" })



});
