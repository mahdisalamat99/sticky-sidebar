const sideBar = document.querySelector(".sidebar");

const vh = window.innerHeight;

const sideBarHeight = sideBar.offsetHeight;
console.log(sideBarHeight);



console.log("sidebar Height : " + sideBarHeight);

let lastScrollPoitn = 0 ;


function toDown(){
    const sideBarTopDistance = sideBar.getBoundingClientRect();
    const sidebarTop = sideBarTopDistance.top;

    console.log("sidebar Top distance :" + sidebarTop)
    if (sideBarHeight+sidebarTop >vh){
        console.log("456")
        sideBar.style.top=-scrollY;
    } else {
        console.log("123")
        sideBar.style.top= vh - sideBarHeight;
    }  



    function dirDetector(){
        if(this.oldScroll>this.scrollY){
            console.log("up")
            if(sidebarTop>0){
                sideBar.style.top = scrollY;
            } else {
                sideBar.style.top = 0;
            }
        } else {
            console.log("down")
        }
        this.oldScroll= this.scrollY;
    }

    dirDetector();
}
window.addEventListener("scroll", toDown);


// scroll direction detector


