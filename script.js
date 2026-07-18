//========================================
// HAMBURGER MENU - NAV LIST 
//===================================

function hamBurgerMenu(){
    const hamBurgerIcon = document.getElementById("hamburger-icon");
    hamBurgerIcon.addEventListener("click", () => {
        document.getElementById("hamburger-menu").classList.toggle("show");

        setTimeout(()=> {
        const menu = document.getElementById("hamburger-menu")
        menu.classList.remove("show")
    }, 10000)
        

    });
    return hamBurgerIcon

    
}
console.log(hamBurgerMenu())
    

// =============================================
//  DATA — product catalogue
// =============================================

const products = [
    {
        id: 1,
        name: "Smart Watch",
        rating: 4.3,
        reviews: 149,
        stock: 14,
        price: 50,
        category: "electronics",
        description: "A close-up of a modern smartwatch with a round, black digital face displaying a minimalist fitness tracker.",
        imageOne: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMHdhdGNofGVufDB8fDB8fHww",
        imageTwo: "https://images.unsplash.com/photo-1636877648291-dc13488232fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        imageThree: "https://images.unsplash.com/photo-1638257501472-830885929bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        imageFour: "https://images.unsplash.com/photo-1639055038710-3c83fe307708?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
        id: 2,
        name: "Laptops",
        rating: 4.5,
        reviews: 129,
        stock: 16,
        price: 250,
        category: "electronics",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 3,
        name: "Wireless Headphones",
        rating: 4.9,
        reviews: 142,
        stock: 12,
        price: 20,
        category: "electronics",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 4,
        name: "Ipad",
        rating: 4.2,
        reviews: 149,
        stock: 18,
        price: 400,
        category: "electronics",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1628866971119-27eff0749b00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwYWRzfGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 5,
        name: "Charging Adapter",
        rating: 4.7,
        reviews: 135,
        stock: 20,
        price: 5,
        category: "electronics",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmdlcnN8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 6,
        name: "Refridgerator ",
        rating: 4.8,
        reviews: 150,
        stock: 7,
        price: 200,
        category: "electronics",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1722603929403-de9e80c46a9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 7,
        name: "Men's Clothing ",
        rating: 4.3,
        reviews: 149,
        stock: 9,
        price: 40,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 8,
        name: "Women's Clothing",
        rating: 4.1,
        reviews: 141,
        stock: 6,
        price: 25,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 9,
        name: "Kid's Clothing ",
        rating: 4.3,
        reviews: 149,
        stock: 11,
        price: 15,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1578897367107-2828e351c8a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 10,
        name: "Cozy Hoodie",
        rating: 4.9,
        reviews: 119,
        stock: 0,
        price: 50,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1618333845076-890b5baf8ffe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 11,
        name: "Bags",
        rating: 4.3,
        reviews: 139,
        stock: 12,
        price: 21,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 12,
        name: "Nike Sneakers",
        rating: 4.0,
        reviews: 142,
        stock: 11,
        price: 30,
        category: "apparel & fashion",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 13,
        name: "Pendant Lamps",
        rating: 4.7,
        reviews: 144,
        stock: 13,
        price: 10,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 14,
        name: "Living Room Sofas",
        rating: 4.3,
        reviews: 149,
        stock: 14,
        price: 250,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 15,
        name: "Ceramic Flower Vase",
        rating: 4.7,
        reviews: 139,
        stock: 13,
        price: 18,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1594644465539-783d6f6bb37d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VyYW1pYyUyMGZsb3dlciUyMHZhc2V8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 16,
        name: "Kitchen Utensils",
        rating: 4.3,
        reviews: 148,
        stock: 12,
        price: 8,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1556185781-a47769abb7ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMHV0ZW5zaWxzfGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 17,
        name: "Beddings",
        rating: 4.3,
        reviews: 140,
        stock: 8,
        price: 70,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkZGluZ3N8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 18,
        name: "Fancy Rugs",
        rating: 4.3,
        reviews: 129,
        stock: 11,
        price: 45,
        category: "home & living",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1767159601823-96d0295344ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbmN5JTIwcnVncyU1Q3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 19,
        name: "Skin Care Set",
        rating: 4.3,
        reviews: 120,
        stock: 12,
        price: 100,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNraW4lMjBjYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 20,
        name: "Hair Care Set",
        rating: 4.4,
        reviews: 189,
        stock: 9,
        price: 150,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1624939461078-66a124b3539c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpcmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 21,
        name: "Oil Perfume",
        rating: 4.2,
        reviews: 140,
        stock: 11,
        price: 70,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1638295916768-459f6cf440bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 22,
        name: "Designer Perfume",
        rating: 4.9,
        reviews: 169,
        stock: 14,
        price: 150,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1708979165880-dd0ff61fa748?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbmVyJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 23,
        name: "MakeUp Set",
        rating: 4.3,
        reviews: 149,
        stock: 14,
        price: 100,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwc2V0fGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 24,
        name: "Oral Care",
        rating: 4.3,
        reviews: 141,
        stock: 12,
        price: 8,
        category: "beauty & personal care",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1556281419-1648dd76e343?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbCUyMGNhcmUlMjBzZXR8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 25,
        name: "Vitamins & Dietary Supplements",
        rating: 4.5,
        reviews: 140,
        stock: 13,
        price: 10,
        category: "health & wellness",
        description: "",
        imageOne: "https://plus.unsplash.com/premium_photo-1668605109201-2dcf7a001215?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dml0YW1pbnMlMjBhbmQlMjBzdXBwbGVtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 26,
        name: "Fitness & Recovery ",
        rating: 4.3,
        reviews: 149,
        stock: 0,
        price: 60,
        category: "health & wellness",
        description: "",
        imageOne: "https://plus.unsplash.com/premium_photo-1733328015522-c497d190f74b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3MlMjBhbmQlMjByZWNvdmVyeXxlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 27,
        name: "Mental Wellness & Sleep Aids",
        rating: 4.7,
        reviews: 139,
        stock: 12,
        price: 40,
        category: "health & wellness",
        description: "",
        imageOne: "https://plus.unsplash.com/premium_photo-1689693057880-cdb87cbba871?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVudGFsJTIwV2VsbG5lc3MlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 28,
        name: "First Aid Kit ",
        rating: 4.3,
        reviews: 129,
        stock: 11,
        price: 30,
        category: "health & wellness",
        description: "",
        imageOne: "https://plus.unsplash.com/premium_photo-1668487826975-2e77361e0063?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpcnN0JTIwYWlkJTIwa2l0fGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 29,
        name: "Herbal Teas",
        rating: 4.3,
        reviews: 149,
        stock: 0,
        price: 25,
        category: "health & wellness",
        description: "",
        imageOne: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVyYmFsJTIwdGVhfGVufDB8fDB8fHww",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    },
    {
        id: 30,
        name: "Massage Guns",
        rating: 4.3,
        reviews: 150,
        stock: 14,
        price: 150,
        category: "health & wellness",
        description: "",
        imageOne: "https://images.unsplash.com/photo-1611908200005-b898ddde09cf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzc2FnZSUyMGd1bnN8ZW58MHx8MHx8fDA%3D",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
    }

]

//===========================================
//    BUILD STAR RATING
//==========================================

const buildStar = (rating) => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

    let stars = "★".repeat(fullStar);
    if (halfStar){
        stars += "½"
    }
    stars += "☆".repeat(emptyStar);

    return stars + ` ${rating}`;
}

//===========================================
// BUILD & DISPLAY PRODUCT CARD
//===========================================

const productSection = document.querySelector("#product-section");

function displayProductCard(catalog){


    catalog.forEach((products) => {
        const card = document.createElement("div");
        card.classList.add("product-card")
        card.innerHTML =`
        <img src="${products.imageOne}" alt="${products.name}" />
        <div class="card-body">
        <p>${products.category}</p>
        <h3>${products.name}</h3>
        <span>${buildStar(products.rating)}</span>
        <div class="card-footer">
        <span>$${products.price}</span>
        <button>View Details</button>
        </div>
        </div> 
        `;

        //  OPEN MODAL WHEN THE CARD IS CLICKED

        card.addEventListener("click", ()=>{
            openModal(product)
        });

        productSection.appendChild(card)

    });

    // CHECKS IF THERE ARE ARE NO PRODUCTS IN THE ARRAY
    if (catalog.length === 0){
        productSection.innerHTML = "<p>No products found</p>";
        return
    };

}
displayProductCard(products);


//====================================================
// OPEN MODAL
//==================================================

function openModal(product) {
    let quantity = 1;
    let currentProduct = null;

    const modalOverylay = document.querySelector("#modal-overlay");
    modalOverylay.classList.add("show");

    // GET ELEMENT FROM HTML 

    const imageOne = document.getElementById("image-one");
    const imageTwo = document.getElementById("image-two");
    const imageThree = document.getElementById("image-three");
    const imageFour = document.getElementById("image-four");
    const category = document.getElementById("modal-category");
    const modalName = document.getElementById("modal-name");
    const modalstars = document.getElementById("modal-stars");
    const modalrating = document.getElementById("modal-rating");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const modalStock = document.getElementById("modal-stock");
    const quantityMinus= document.getElementById("quantity-minus");
    const quantityNumber = document.getElementById("quantity-number");
    const quantityPlus = document.getElementById("quantity-plus");
    const ModalAddCart = document.getElementById("modal-add-cart");

    imageOne.src = products.imageOne;
    imageOne.alt = products.name;
    imageTwo.src = products.imageTwo;
    imageTwo.alt = products.name;
    imageThree.src = products.imageThree;
    imageThree.alt = products.name;
    imageFour.src = products.imageFour;
    imageFour.alt = products.name;
    category.textContent = products.category;
    modalName.textContent = products.name;
    modalstars.textContent = buildStar(products.rating) + "." + products.reviews + "reviews";
    modalPrice.textContent = products.price;
    modalDescription.textContent = products.description;
    quantityNumber.textContent = "1";

    //   STOCK MESSAGE

    if (products.stock > 0 ){
        modalStock.textContent = `✅ In stock - ${products.stock} left`;
        ModalAddCart.disabled = false;
        ModalAddCart.style.opacity = "0.5"
    } else {
        modalStock.innerHTML = "<span > ❌ Out of Stock </span>";
        ModalAddCart.disabled = true;
        ModalAddCart.style.opacity = "1"

    };

    //  


    quantityMinus.addEventListener("click", ()=>{
        if (quantity > 1) {
            quantityNumber--;
            quantityNumber.textContent = quantity; 
        }

    });

    quantityPlus.addEventListener("click", () => {
        if (quantity && currentProduct > products.stock){
            quantity++;
            quantityNumber.textContent = quantity;
        }
    });

    ModalAddCart.innerHTML = "<button>Add to Cart</button>"


};
openModal(products)