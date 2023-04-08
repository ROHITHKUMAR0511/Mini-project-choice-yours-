let products = {
    data: [
      {
        productName:"samsung S22",
        category:"Above>40K",
        price:"55,000",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg",
        star:"RATING: 4.5 out of 5",
        review:"The Galaxy S22 is a decent phone overall, with the limited battery life being the only major flaw in an otherwise excellent yet petite package.The design of this relatively small smartphone is suave yet understated, and the screen is strong and punchy  even if it isnt as huge as its rivals."
        
      },
      {
        productName: "realme c33",
        category: "Under10K",
        price: "9,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-c33.jpg",
        star:"RATING: 4.3 out of 5 ",
        review:"The Ralme c33 is a Budget phone, so its suitable for only basic uses only, for example checking mail and call etc. Basic use is fullfiled by realme line up of c series."
      },
      {
        productName: "Redmi 10A",
        category: "Under10K",
        price: "9,500",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-10a.jpg",
        star:"RATING:3.8 out of 5",
        review:"This Redmi 10A 5g is the best mobile phone under Rs. 10,000 in terms of features. With this Redmi 10A 4GB 64GB, my life has become much easier because it provides a fast and smooth working experience, we can now play games without lag. This was the best purchase we've ever made."
      },
      {
        productName: "IPhone14",
        category: "Iphones",
        price: "49,999",
        image: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390794_View_1/mobiles/smartphones/apple-iphone-14-plus-128-gb-blue-4-gb-ram-.jpg",
        star:"RATING:4.4 out of 5",
        review:"The iPhone 14 is the best iPhone for most people, but despite that, its not that exciting. The iPhone 14 Pro and iPhone 14 Pro Max get the biggest upgrades this year, a clever replacement for the notch and a 48MP main camera.Still, Action mode is another plus if youre looking for super smooth video. Plus Apple may be offering easier access to repairs for this generation, giving the iPhone 14 a surprise advantage over the iPhone 13."
        },
      {
        productName: "IPhone14 Pro Max",
        category: "Iphones",
        price: "29",
        image: "https://img2.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
        star:"RATING:4.5 out of 5",
        review:"the iPhone 14 Pro Max doesnot look like a major upgrade. And for those who own one of last years Pro models, it really doesnot make for a worthy buy. But for others, the iPhone 14 Pro Max brings quite a bit to the table. At a starting cost of Rs 1,39,900, it is pricey, sure, but for your money, you will get a daily driver that’s able to deliver a top-notch user experience that check marks almost all aspects of smartphone usage. the 14 Pro Max shouldnot leave you wanting for more. while the smaller model is definitely the handier of the two."
      },
      {
        productName: "Realme 10 5G",
        category: "Between=10K-20K",
        price: "15,000",
        image: "https://i.gadgets360cdn.com/products/large/realme-10-5g-db-709x800-1668155471.jpg",
        star:"RATING: 4.1 out of 5",
        review:"the Realme 10 appears to be a solid option despite a few shortcomings. Had it offered the latest software and better camera hardware, the Realme 10 would have been the device to beat in the segment. However, the phone delivers in aspects like offering stable performance, a vivid display, long battery life, and a lightweight, attractive design. The Realme smartphone also packs the fan-favourite audio jack, NFC, and a dedicated slot for a microSD card. "
      },
      {
        productName:"Moto G40 fusion",
        category: "Between=10K-20K",
        price: "14,000",
        image: "https://m.media-amazon.com/images/I/31pWD3TXvvL.jpg",
        star:"RATING:4.1 out of 5",
        review:"The Moto G40 Fusion is Lenovo-owned Motorolas latest G series smartphone launched alongside the Moto G60 (review). Aiming to disrupt the affordable segment and compete against brands like Xiaomi and Realme, the G40 Fusion has been priced starting at Rs 13,999. The phone boasts some decent features and respectable specs, including the Qualcomm Snapdragon 732G chipset, a 6,000mAh battery and a 120Hz refresh rate display. Lets see if the Moto G40 Fusion can go head to head against its rivals."
      },
      {
        productName:"Realme Neo3 GT",
        category: "Between=20k-40k",
        price:"26,000" ,
        image:"https://m.media-amazon.com/images/I/51973rPxV9L._SY741_.jpg" ,    
        star:"RATING:4.2 out of 5",
        review:"The Realme GT Neo 3's 150W fast charging system does make the phone worryingly hot and the display's 120Hz refresh rate isn't usable in most games that I tried. The SoC also falls a bit short in terms of raw performance compared to the competition, most of which pack a Qualcomm Snapdragon 888 SoC. Meanwhile, the phone also lacks a few hardware features like an IP rating or wireless charging, which are available on competing devices such as the Samsung Galaxy S20 FE 5G (Review) and the Apple iPhone (2022) (Review) in the similar priced range."
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
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "(Rs." + i.price+")";
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
  