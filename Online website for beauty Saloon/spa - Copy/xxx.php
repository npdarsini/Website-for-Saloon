<?php

$name = $_POST['name'];
$ssn= $_POST['ssn'];
$email = $_POST['email'];
$phone= $_POST['phone'];
//$service_type= $_POST['service_type'];
 $con = mysql_connect("localhost","root","");
 if (!$con)
   {
  
   die('Could not connect: ' . mysql_error());
   }

 mysql_select_db("salon", $con);
 $sql="insert into customer(name,ssn,email,phone) values ('.$name','.$ssn''.$email','.$phone')";
 //$result=mysql_query($sql,$con);
 if (!mysql_query($sql,$con))
   {
   die('Error: ' . mysql_error());
   }
 echo "1 record added";

 mysql_close($con)
 ?>

