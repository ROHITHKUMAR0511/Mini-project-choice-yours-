let products = {
    data: [
      {
        productName:"samsung galaxy watch 5",
        category:"Between=20k-40k",
        price:"30,000",
        image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch5.jpg",
        star:"RATING:4.4 out of 5",
        review:"Neutral at its core with highly customizable flourishes through Samsung's Bespoke service plus premium, hardy build quality."
      },
      {
        productName: "Google Pixel Watch",
        category: "Above>40K",
        price: "52,000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-.jpg",
        star:"RATING:4.6 out of 5",
        review:"My experience with Google’s first Pixel wearable has been largely the same as Andy’s. For a $350 smartwatch, this thing just doesn’t cut it. The Pixel Watch looks great, and as someone with small wrists, I think it fits really well, too. But the crown is mushy, the bezels easily distract from what you’re looking at on the screen, and not offering a larger size for people who do want a big watch is mind-boggling to me. That small size also means that the battery is pretty consistently terrible. The Pixel Watch is almost always 20% lower than my Apple Watch Series 7, with almost identical usage and just barely scrapes by a full day of normal use."
      },
      {
        productName: "Xiaomi Mi Watch Lite",
        category: "under10K",
        price: "2,500",
        image:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-watch.jpg",
        star:"RATING:4.0 out of 5",
        review:"The Xiaomi Mi Watch Lite is a good fitness tracker, but a very basic smartwatch. If you’re after the Mi Band experience and would like the benefits of a larger display, Xiaomi’s latest budget smartwatch is a fine option. It’s limited beyond those basic functions, however. Those looking for an on-device voice assistant or music storage for offline listening will want to look elsewhere."
      },
      {
        productName: "Apple Watch SE (2022)",
        category: "Iwatch",
        price: "30,000",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8se-2022.jpg",
        star:"RATING:4.4 out of 5",
        review:"The original SE was the sensible midrange compromise: faster than the aged, entry-level Series 3 but a more affordable alternative than the then-flagship Series 6 watches. It muddied the waters in the Apple Watch lineup because, really, you weren’t giving up very much. Functionally, it filled the same role as last year’s iPhone model: cheaper, without as many features as the latest phone, but still a pretty great buy that would satisfy most people. "
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
  