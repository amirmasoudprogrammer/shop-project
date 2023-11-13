/* menu responsive*/

const menutrigger=document.querySelector(".mobile-menu-trigger")
const menu =document.querySelector(".menu")
const menuMain= menu.querySelector(".menu-main");
const goback= menu.querySelector(".go-back");
const closeMenu = menu.querySelector(".mobile-menu-close")
let subMenu;

goback.addEventListener("click",news)
function news() {
    hideSubmenu()
}
menutrigger.addEventListener("click",endmenu)
function endmenu() {
    togglemenu()
}
function togglemenu() {
    menu.classList.toggle("active")
    document.querySelector(".menu-overlay").classList.toggle("active");
}
document.querySelector(".menu-overlay").addEventListener("click",test);
function test() {
    togglemenu()
}
function hideSubmenu() {

    subMenu.style.animation="slideright 0.5s ease forwards";
    setTimeout(()=>{
        subMenu.classList.remove("active");
    },300)

    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}
menuMain.addEventListener("click",start)
function start(e) {
    if (e.target.closest(".menu-item-has-children")){
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren)
    }






    function showSubMenu(hasChildren) {
        subMenu = hasChildren.querySelector(".sub-menu");
        subMenu.classList.add("active");
        subMenu.style.animation="slideleft 0.5s ease forwards";

        const menuTitle =hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
        menu.querySelector(".current-menu-title").innerHTML=menuTitle;
        menu.querySelector(".mobile-menu-head").classList.add("active");
    }
}
closeMenu.addEventListener("click",closemenu)
function closemenu() {
    togglemenu()
}
/* menu responsive*/

/*input*/
const inputs =document.querySelector(".input");
const searchicon =document.querySelector(".search-icon");
searchicon.addEventListener("click",run)
function run() {
    inputs.classList.toggle("active");
}


/*سبد خرید */
const carticon=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const closecart=document.querySelector("#cart-close");

carticon.addEventListener("click",shopincart);
function shopincart() {
    cart.classList.add("active");
}

closecart.addEventListener("click",closeend);
function closeend() {
    cart.classList.remove("active");
}

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",starts)
}else {
    starts();
}


function starts() {
    addEvents();
}

function update() {
    addEvents();
    updatetotal()
}

function addEvents() {

    const Cartremove= document.querySelectorAll(".cart-remove");
    console.log(Cartremove)
    Cartremove.forEach(btn =>{
        btn.addEventListener("click", removeend);

        let carquanty_inputs = document.querySelectorAll(".cart-quantity");

        carquanty_inputs.forEach(input =>{
            input.addEventListener("change",handle_changeitemquantity);
        })
    })


    let addCart =document.querySelectorAll(".add-cart");
    addCart.forEach(box =>{
        box.addEventListener("click", start_cartitem);
    });

    const buy_btn=document.querySelector(".btn-buy");
    buy_btn.addEventListener("click",handle_buyorder);

}

let itemsAdded=[]
function start_cartitem() {
    let product = this.parentElement;
    let title =product.querySelector(".product-title").innerHTML;
    let price =product.querySelector(".product-price").innerHTML;
    let imgSrc =product.querySelector(".product-img").src;



    let newToAdd ={
        title,
        price,
        imgSrc,
    };

    if (itemsAdded.find(el => el.title == newToAdd.title)){
        alert("این محصول رو قبلا انتخاب کردید");
        return;
    }else {
        itemsAdded.push(newToAdd);
    }


    let  cartBoxElement = CartBoxComponent(title,price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent=cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);


    update();

}

function removeend() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
        el =>
            el.title =
                this.parentElement.querySelector(".cart-product-title").innerHTML

    );


    update();
}

function handle_changeitemquantity() {
    if (isNaN(this.value) || this.value < 1){
        this.value= 1;

    }
    this.value=Math.floor(this.value);

    update();
}



function handle_buyorder() {
    if (itemsAdded.length <= 0){
        alert("هنوز سفارشی برای ثبت وجود ندارد! لطفا ابتدا سفارش دهید.");
        return;
    }
    const cartContent=cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("سفارش شما با موفقیت ثبت شد :)");
    itemsAdded=[];
    update();
}


function updatetotal() {
    let cartboxst=document.querySelectorAll(".cart-box");
    const  totalElement =cart.querySelector('.total-price');
    let total =0;
    cartboxst.forEach(cartbox => {
        let priceElement = cartbox.querySelector(".cart-price");
        let price=parseFloat(priceElement.innerHTML.replace("$",""))
        let quantity = cartbox.querySelector(".cart-quantity").value;
        total += price * quantity;
    })

    total=total.toFixed(2);


    totalElement.innerHTML= total + "تومان" ;

}






/*==============================*/
function CartBoxComponent(title,price, imgSrc) {
    return `                      
  <div class="cart-box">
      <img src=${imgSrc} alt="" class="cart-img">
      <div class="detail-box">
      
   <div class="cart-product-title">
   ${title}
    </div>
   
      <div class="cart-price">
        ${price}
        </div>
        
        
  <input type="number" value="1" class="cart-quantity" >
     </div>
     <i class="las la-trash-alt cart-remove"></i>
     </div>
`
}



/*سبد خرید */
/*popup */
const popup_item=document.querySelector(".popup");
const black_item=document.querySelector(".black");
const close_popup=document.querySelector(".close-popup");
setTimeout(start_popup,3000);
function start_popup() {
popup_item.classList.add("active");
black_item.classList.add("active");
}
close_popup.addEventListener("click",popup);
function popup() {
    popup_item.classList.remove("active");
    black_item.classList.remove("active");
}
/*popup */











