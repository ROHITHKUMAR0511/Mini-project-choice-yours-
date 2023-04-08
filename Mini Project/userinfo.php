<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User detail</title>
</head>
<body>
    <div class="table">
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // connecting database
                $conn=mysqli_connect("localhost","root","","rohith");
                $sql="SELECT * FROM  contact ";
                //selecting datas from table:"contact"
                $select=mysqli_query($conn,$sql);
                $data=mysqli_fetch_assoc($select);
                $num=mysqli_num_rows($select);
                if ($num>=0){
                    while ($data=mysqli_fetch_assoc($select)){
                        echo "
                        <tr>
                        <td>".$data['name']."</td>
                        <td>".$data['email']."</td>
                        <td>".$data['message']."</td>
                        </tr>
                        ";
                    }
                }
                ?>
            </tbody>
        </table>
    </div>
    <?php
        
     ?>
</body>
</html>