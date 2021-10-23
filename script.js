const sideBar = document.querySelector(".sidebar");

const vh = window.innerHeight;

const sideBarHeight = sideBar.offsetHeight;
console.log(sideBarHeight);

// const contentHeight = document.querySelector(".content").scrollHeight;
// console.log("content Heigh :" + contentHeight);

// const sidebarScrollTop = document.querySelector(".sidebar").scrollHeight;
// console.log("sidebar Height :" + sidebarHeight);





console.log("sidebar Height : " + sideBarHeight);

function toDown(){
    const sideBarTopDistance = sideBar.getBoundingClientRect();
    const sidebarTop = sideBarTopDistance.top;


    const scrolled = window.scrollY;
    console.log("scrolled :" + scrolled);

    console.log("sidebar Top distance :" + sidebarTop)
    if (sideBarHeight+sidebarTop >vh){
        console.log("456")
        sideBar.style.top=-scrollY;
    } else {
        console.log("123")
        sideBar.style.top= vh - sideBarHeight;
    } 

    // if (scrolled > sideBarHeight){
    //     sideBar.style.bottom = -1000 + "px";
    // }

    // if (scrolled < 500+"px"){
    //     sideBar.style.top = -scrolled;
    // } else {
    //     sideBar.style.bottom = 0;
        
    // }
}
window.addEventListener("scroll", toDown);
toDown();

