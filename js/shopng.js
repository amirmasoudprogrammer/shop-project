/*shoping*/
const filter_shoping=document.querySelector(".filter-shoping");
const angle_left=document.querySelector(".angle-left");
const shoping=document.querySelector(".shoping");
angle_left.addEventListener("click",start_angle);
function start_angle() {
    shoping.classList.add("active")
    filter_shoping.classList.toggle("active")

}
/*shoping*/



