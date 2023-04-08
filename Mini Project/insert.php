<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style2(card).css">
    <link rel="stylesheet" href="style1(nav).css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>insert</title>
</head>
<body>
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">CHOICE YOURS</label>
      <ul>
        <li><a  href="Home.html">Home🏠</a></li>
        <li><a href="about.html">About</a></li>
        <li><a class="active" href="http://localhost/project/contactus.php">Contact</a></li>
      </ul>
    </nav>
    <?php
    // connecting database
    $conn=mysqli_connect("localhost","root","","rohith");
    // if(!$conn){
    //     echo "error";
    // }
    // else{
    //     echo "connected";
    // }
    // getting  values from contactus.php  
    $user=$_POST['name'];
    $mail=$_POST['email'];
    $msg=$_POST['message'];
    // inserting values to database
    $sql="INSERT INTO `contact`(`name`, `email`, `message`) VALUES ('$user','$mail','$msg')";
    $insert=mysqli_query($conn,$sql);
    ?>
    <br><br><br><br>
    <center>
    <h1>thank you for your response! Ur message are stored in database!<h1><br>
    <a href="Home.html">CLICK HERE to return Home</a><center>
</body>
</html>