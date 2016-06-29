<?php
$name=$_POST['name'];
$age=$_POST['age'];
 $con = mysql_connect("localhost","root","");
 if (!$con)
   {
  
   die('Could not connect: ' . mysql_error());
   }

 mysql_select_db("test", $con);
 $sql="insert into details(name,age) values ('.$name','.$age')";
 $result=mysql_query($sql,$con);
 if (!mysql_query($sql,$con))
   {
   die('Error: ' . mysql_error());
   }
 echo "1 record added";

 mysql_close($con)
 ?>

