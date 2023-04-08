let products = {
    data: [
      {
        productName:"Samsung Galaxy Tab S8",
        category:"Above>40K",
        price:"55,000",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8.jpg",
        star:"RATING:4.2 out of 5",
        review:"The Samsung Galaxy Tab S8 is an excellent Android tablet. It's fast, long-lasting, beautiful to look at and comfortable to hold. The cameras are good enough to make taking photos and video calls with your tablet seem fun, and the packed-in S Pen is a nice touch that works well.        That said, the Galaxy Tab S8 can't match the performance or display quality of most modern iPads. With Samsung's DeX mode enabled the Galaxy Tab S8 is a more feasible laptop replacement than nearly any iPad, but even for its reasonable starting price of $838 with keyboard you can get a more capable Windows laptop like the Asus Zenbook 13 OLED.The Galaxy Tab S8 is good at a lot of things, but it's best at being a premium Android tablet. You can use it to get work done in a pinch, but in my experience it's best enjoyed as a speedy all-purpose device for making work and play a bit more enjoyable. On the couch its great for gaming or reading comics, and at work it's nice to have as a note-keeping device or secondary display, especially if you go to the trouble of investing in the Galaxy ecosystem and making your workspace DeX-friendly."

      },
      {
        productName: "Motorola Moto Tab G62",
        category: "Between=10K-20K",
        price: "17,000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-tab-g62.jpg",
        star:"RATING:4.0 out of 5",
        review:"If you are looking for a tablet for everyday use and that too within a 20k budget, then Motorola’s G62 Tablet can be a smart choice. The tablet has a decent design and a 2K display along with packing a large battery. It is IP52 rated and is powered by a good processor. Although the camera setup is underwhelming and charging speed is slow, but that can be overlooked as one can’t expect to get every premium spec in a 15k device."
      },
      {
        productName: "Xiaomi Pad 5",
        category: "Between=20k-40k",
        price: "26,000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pad-5.jpg",
        star:"RATING:4.3 out of 5",
        review:" Xiaomi Mi Pad (Review) was a solid budget tablet that offered excellent value and performance back in 2015, Xiaomi's new Pad 5 is a proper mid-ranger that was built with productivity in mind, which is not commonly found at this price point.        More importantly, Xiaomi has also optimised the software experience really well, which makes it a lot more useful once you use it with some of the accessories. The tablet offers a quality display for watching videos and the 120Hz refresh rate is useful while playing games. The Smart Pen is also quite handy and on the whole, the Pad 5 definitely works well as a productivity device."
      },
      {
        productName: "Apple iPad (2022)",
        category: "Ipad",
        price: "56,000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-10-2022.jpg",
        star:"RATING:4.4 out of 5",
        review:"The iPad 10.2 has an upgraded chipset compared to the last two iPad models with Apple’s A12 Bionic processor. It’s not Apple’s latest, having first Z debuted in the iPhone XS and iPhone XR smartphone, but a solid replacement for the last-gen iPad’s A10 Fusion chipset. What does that mean for you? It means improved performance on this newest iPad, although it’s not going to be a gamechanger – this tablet won’t be as speedy as the iPad Air 4, which touts the new A14 Bionic chipset, or one of the most recent iPhone models.          That said, we found the new iPad to be quick enough for everything we needed it to do. Apps loaded quickly, and we didn’t experience any slowdown during our time with the tablet."
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
  