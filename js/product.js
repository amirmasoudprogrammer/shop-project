const filters=document.querySelector(".filters").children;
const productscard=document.querySelector(".products-cart").children;
console.log(productscard);
for (let i=0;i<filters.length;i++){
    filters[i].addEventListener("click",flit);
    function flit() {
        for (let j=0; j<filters.length;j++){
            filters[j].classList.remove("active")
        }
        this.classList.add("active");

const target=this.getAttribute("data-target");
for (let k=0;k<productscard.length;k++){
    productscard[k].style.display="none";
    if (target==productscard[k].getAttribute("data-id" || target==productscard[k].id)){
        productscard[k].style.display="block";
    }
}


    }



}