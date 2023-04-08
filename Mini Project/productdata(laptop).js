let products = {
    data: [
      {
        productName:"Apple Macbook pro",
        category:"macbook",
        price:"1,49,000",
        image:"https://img6.gadgetsnow.com/gd/images/products/additional/large/G309945_View_1/computer-laptop/laptops/apple-macbook-pro-mvvl2hn-laptop-intel-core-i7-9th-gen-integrated-16gb-512gb-ssd-catalina.jpg"

      },
      {
        productName:"HP 247 G8 6B5R3PA Laptop",
        category:"HP",
        price:"27,000",
        image:"https://cdn1.smartprix.com/rx-iAUEUseDV-w420-h420/hp-247-g8-6b5r3pa-la.webp"
      },
      {
        productName:"Lenovo Chromebook-82M10019HA",
        category:"chromebook",
        price:"26,000",
        image:"https://img2.gadgetsnow.com/gd/images/products/additional/large/G323894_View_1/computer-laptop/laptops/lenovo-chromebook-82m10019ha-amd-a3015ce-processor-14-inches-chromebook-laptop-4gb-64-hdd-chrome-os-grey-1-45-kg-.jpg"

      }

      ,{
        productName:"Asuse laptop",
        category:"Asuse",
        price:"90,000",
        image:"https://img5.gadgetsnow.com/gd/images/products/additional/large/G335032_View_3/computer-laptop/laptops/asus-strix-g15-g513qe-hn161t-r9-5900hx-15-6-inches-gaming-laptop-16gb-1tb-ssd-windows-10-black-2-5-kg-.jpg"
      }
      
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
  