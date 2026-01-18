<?php
$servername="localhost";
$username="root";
$password="";
$database="sneakhub";
$conn=mysqli_connect($servername,$username,$password,$database);
if($conn->connect_errno){
    echo"connection success";
}else{
    echo"connection not success";

}




?>