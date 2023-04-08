let products = {
    data: [
      {
        productName:"Apple Macbook pro",
        category:"macbook",
        price:"1,49,000",
        image:"https://img6.gadgetsnow.com/gd/images/products/additional/large/G309945_View_1/computer-laptop/laptops/apple-macbook-pro-mvvl2hn-laptop-intel-core-i7-9th-gen-integrated-16gb-512gb-ssd-catalina.jpg",
        star:"RATING: 4.4 out of 5",
        review:"The new Pro displays have also been upgraded with the iPad Pro's ProMotion feature, which is so good that it's now upsetting to use a laptop without it. ProMotion, which is turned on by default, makes it so the Pro can adjust its refresh rate between 10Hz and 120Hz, depending on what you're doing. You can turn off ProMotion and use the Pro at a fixed refresh rate (47.95Hz, 48Hz, 50Hz, 59.94Hz, or 60Hz) if you want to, but I tried using it at 60Hz and found the difference too glaring after almost a week at 120Hz. It really is so much smoother with ProMotion turned on."
      },
      {
        productName:"HP 247 G8 6B5R3PA Laptop",
        category:"HP",
        price:"27,000",
        image:"https://cdn1.smartprix.com/rx-iAUEUseDV-w420-h420/hp-247-g8-6b5r3pa-la.webp",
        star:"RATING:3.8 out of 5",
        review:" laptops without os comes on a great price and it surely did. Ryzen 3 5500u's performace is somewhat equal to i5 10th gen so i am very happy with performace there are no lags and stutters. Storage speed and size is awesome. Ram is also fast 3000 - 3200mhz i think. I use zorin os which is free and a great alternative to windows plus it is more resource efficient that allows for even better performance than windows. Webcam is typical laptop one barely gets the job done. The display is below average not recommended for watching content but for work it gets the job done. Finally build, its is light weight and plastic made i.e. is sturdy enough to with stand some light blows i think. Great laptop worth buying"
      },
      {
        productName:"Lenovo Chromebook-82M10019HA",
        category:"chromebook",
        price:"26,000",
        image:"https://img2.gadgetsnow.com/gd/images/products/additional/large/G323894_View_1/computer-laptop/laptops/lenovo-chromebook-82m10019ha-amd-a3015ce-processor-14-inches-chromebook-laptop-4gb-64-hdd-chrome-os-grey-1-45-kg-.jpg",
        star:"RATING:3.5 out of 5",
        review:"The Lenovo IdeaPad Duet Chromebook is one of the 2-in-1 laptop hybrid to hit the market in 2020, but where others lack software support or sacrifice portability by loading up on more heavy-duty hardware, the Duet manages to strike the perfect balance between functionality, portability, longevity, and  perhaps most importantly  affordability.  "
      }

      ,{
        productName:"Asuse laptop",
        category:"Asuse",
        price:"90,000",
        image:"https://img5.gadgetsnow.com/gd/images/products/additional/large/G335032_View_3/computer-laptop/laptops/asus-strix-g15-g513qe-hn161t-r9-5900hx-15-6-inches-gaming-laptop-16gb-1tb-ssd-windows-10-black-2-5-kg-.jpg",
        star:"RATING: 4.5 out of 5",
        review:"The ASUS ROG Strix G15 certainly has a lot going for it, and very little against it. The Ryzen CPU and NVIDIA GPU can pretty much chew through any current generation game and almost any modern workload. The design is bold, unique and futuristic, and the display offers a joyful viewing experience. Not to mention, the battery life is seriously impressive.Considering all of this, the Strix G15 is an easy recommendation for anyone who wants a high-performance gaming laptop that will stand out from the crowd. It is one of the best gaming laptops that ASUS has produced till date, and when you take the price into consideration, I think it is the gaming laptop to beat in 2021."
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
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Rs." + i.price;
    container.appendChild(price);
    //star
    let star = document.createElement("h5");
    star.classList.add("product-star");
    star.innerText= i.star;
    container.appendChild(star);
    //review
    let review=document.createElement("p")
    review.classList.add("review");
    review.innerText=i.review;
    container.appendChild(review)
  
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
  