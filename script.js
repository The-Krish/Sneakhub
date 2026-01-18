//------GSAP TEXT BOX-1------//
gsap.to(".box1>h1", {
  x: 550,
  duration: 0.9,
  delay: 0.5,
});
//--------------------------//
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


//---MENU---//
function slider() {
  const slide = document.querySelector(".menu-sidebar");
  const menu = document.querySelector(".menu2");

  menu.addEventListener("click", () => {
    if (menu.firstElementChild.classList.contains("ri-menu-fold-line")) {
      menu.firstElementChild.classList.replace(
        "ri-menu-fold-line",
        "ri-close-line"
      );
    } else {
      menu.firstElementChild.classList.replace(
        "ri-close-line",
        "ri-menu-fold-line"
      );
    }

    slide.classList.toggle("show-sidebar");
  });
}
slider();

//--cart--//
function sidecart() {
  const cart = document.querySelector(".cart");
  const cartText = document.querySelector(".cart-text");
  const close = document.querySelector(".close");

  cartText.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
  close.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}
sidecart();

if (document.readyState == "loading") {
  document.addEventListener("click", ready);
} else {
  ready();
}

//remove-ITems

function ready() {
  let removeCartBtn = document.querySelectorAll(".cart-remove");
  removeCartBtn.forEach((removeCartBtn) => {
    removeCartBtn.addEventListener("click", (event) => {
      removeCartBtn.parentElement.remove();
      UpdateTotal();
    });
  });

  var quantityInputs = document.querySelectorAll(".cart-quantity");
  quantityInputs.forEach((quantityInputs) => {
    quantityInputs.addEventListener("change", quantityChanged);
  });
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  UpdateTotal();
}

function UpdateTotal() {
  var cartItemContainer = document.querySelectorAll(".cart-content")[0];
  var cartRows = cartItemContainer.querySelectorAll(".cart-box");
  var total = 0;
  cartRows.forEach((cartRows) => {
    var priceElement = cartRows.getElementsByClassName("cart-price")[0];
    var cartQuantity = cartRows.getElementsByClassName("cart-quantity")[0];
    console.log(priceElement, cartQuantity);
    var price = priceElement.innerText.replace("Rs.", "");
    var quantity = cartQuantity.value;
    total = total + price * quantity;
  });
  document.getElementsByClassName("total-price")[0].innerText = "₹" + total;
}

//--ADDitems--//

var addCartBtn = document.querySelectorAll(".add-cart");
addCartBtn.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", addCartClicked);
});

function addCartClicked(event) {
  var addCartBtn = event.target;
  var shopItem = addCartBtn.parentElement;
  var title = shopItem.querySelectorAll(".product-title")[0].innerText;
  var prodImg = shopItem.querySelectorAll(".shoe-img")[0].src;
  var price = shopItem.querySelectorAll(".product-price")[0].innerText;
  console.log(title, price, prodImg);
  addItemCart(title, price, prodImg);
}
function addItemCart(title, price, prodImg) {
  var cartRoo = document.createElement("div");
  cartRoo.classList.add("cart-box");
  var cartItems = document.querySelectorAll(".cart-content")[0];
  var cartRowContent = `  
   
 <div class="cart-img">
     <img src="${prodImg}" alt="">
 </div>
    <div class="cart-product-title"><h2>${title}</h2></div>
    <div class="cart-price">
    ${price}
     </div>
    <input type="number" value="1" class="cart-quantity">
  <div class="cart-remove"><i class="ri-delete-bin-2-fill"></i> 
  </div>
`;
  cartRoo.innerHTML = cartRowContent;
  cartItems.append(cartRoo);
}

//searching filterr//

function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".product-box");
  let pname = document.querySelectorAll(".product-title");
  for (var i = 0; i <= pname.length; i++) {
    let a = item[i].querySelectorAll(".product-title")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
