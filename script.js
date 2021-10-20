const sideBar = document.querySelector(".sidebar");
const profile = document.querySelector(".profile");
const menu = document.querySelector(".menu");

const content = document.querySelector(".content");

const sideBarHeight = sideBar.offsetHeight;
console.log(sideBarHeight)

const contentHeight = document.querySelector(".content").scrollHeight;
// console.log("content Heigh :" + contentHeight);

const sidebarHeight = document.querySelector(".sidebar").scrollHeight;
// console.log("sidebar Height :" + sidebarHeight);

const sideBarTopDistance = sideBar.offsetTop;
const profileTopDistance = profile.offsetTop;

window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY;
    console.log("scrolled :" + scrolled);
    // fixedSidebar();
    if (scrolled>=40){
        sideBar.style.bottom=0+"px";
        // sideBar.style.top=-40+"px";
    }    
})
// console.log(sideBarTopDistance);
// console.log(profileTopDistance);


// function fixedSidebar (){
//     if (window.scrollY>profileTopDistance){
//         sideBar.style.bottom=0;
//     }
// }
