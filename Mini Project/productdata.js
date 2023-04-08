let products = {
    data: [
      {
        productName:"samsung S22",
        category:"Above>40K",
        price:"55,000",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg"
      },
      {
        productName: "realme c33",
        category: "Under10K",
        price: "9,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-c33.jpg",
      },
      {
        productName: "Redmi 10A",
        category: "Under10K",
        price: "9,500",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-10a.jpg",
      },
      {
        productName: "IPhone14",
        category: "Iphones",
        price: "49,999",
        image: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390794_View_1/mobiles/smartphones/apple-iphone-14-plus-128-gb-blue-4-gb-ram-.jpg",
      },
      {
        productName: "IPhone14 Pro Max",
        category: "Iphones",
        price: "29",
        image: "https://img2.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
      },
      {
        productName: "Realme 10 5G",
        category: "Between=10K-20K",
        price: "15,000",
        image: "https://i.gadgets360cdn.com/products/large/realme-10-5g-db-709x800-1668155471.jpg",
      },
      {
        productName:"Moto G40 fusion",
        category: "Between=10K-20K",
        price: "14,000",
        image: "https://m.media-amazon.com/images/I/31pWD3TXvvL.jpg",
      },
      {
        productName:"Realme Neo3 GT",
        category: "Between=20k-40k",
        price:"26,000" ,
        image:"https://m.media-amazon.com/images/I/51973rPxV9L._SY741_.jpg" ,    
      },
      
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Rs." + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  