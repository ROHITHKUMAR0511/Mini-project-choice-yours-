<!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
   <!-- <title> Responsive Contact Us Form  | CodingLab </title>-->
    <link rel="stylesheet" href="style5(contact).css">
    <link rel="stylesheet" href="style1(nav).css">
    <!-- Fontawesome CDN Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
  <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">CHOICE YOURS</label>
    <ul>
      <li><a href="Home.html">Home🏠</a></li>
      <li><a href="about.html">About</a></li>
      <li><a class="active" href="contactus.html">Contact</a></li>
    </ul>
  </nav>
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">TEAM LEADER</div>
          <div class="text-one">Rohith Kumar</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">rohithkumar@gmail.com</div>
          <div class="text-two">suryaprakash@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>Share your thought about this project and give a opinion to improve this webpage and what issue you faced that leave in this message box!</p>
        <form action="insert.php" method="post">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name="name">
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name="email">
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder="Enter you message" name="message">
        </div>
        <div class="button">
          <input type="submit" value="Send Now" >
        </div>
      </form>
    </div>
    </div>
  </div>
</body>
</html>
