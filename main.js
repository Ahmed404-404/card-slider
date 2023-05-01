let container = document.querySelector(".container"),
    navBtns = document.querySelectorAll('i'),
    cardWidth = document.querySelector(".card").clientWidth,
    isDragging = false,
    prevScroll,
    prevMouse,
    possdiff;



navBtns.forEach(ele=>{
    ele.addEventListener("click",()=>{
        container.scrollLeft += ele.classList.contains("right")? cardWidth - 0 : -cardWidth - 0
    });
});


const dragStart = (e)=>{
    isDragging = true;;
    prevMouse = e.clientX || e.touches[0].pageX;
    prevScroll = container.scrollLeft;
    
};

const dragging = (e)=>{
    if(!isDragging) return;
    container.classList.add("dragging");
    possdiff = (e.clientX || e.touches[0].pageX) - prevMouse ;
    container.scrollLeft = prevScroll + -possdiff;
};

const dragStop = (e)=>{
    container.classList.remove("dragging");
    isDragging = false;
};


container.addEventListener("mousedown",dragStart);
container.addEventListener("touchstart",dragStart);

container.addEventListener("mousemove",dragging);
container.addEventListener("touchmove",dragging);

container.addEventListener("mouseup",dragStop);
container.addEventListener("mouseleave",dragStop);
container.addEventListener("touchend",dragStop);

