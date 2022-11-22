<!--
Name: Mahad
Date: 2022-10-25
Section: CST 8285 section ......
This is the Login&Create.html page for Assignment 2 .......
-->
<?php

require_once('database_connection.php');

$db = db_connect();

// Handle form values sent by new.php
if ($_SERVER['REQUEST_METHOD'] == 'POST') { //make sure we submit the data
  $userName = $_POST['name']; // access the form data
  $userEmail = $_POST['email'];
  $userPass = $_POST['password'];
  //prepare your query string
  $sql = "INSERT INTO users (userName, userEmail, userPWD) VALUES ('".$_POST['name']."', '".$_POST['email']."', '".$_POST['password']."')" or die($db->error);
  $result = mysqli_query($db, $sql);
  // For INSERT statements, $result is true/false

  $id = mysqli_insert_id($db); //the mysqli_insert_id() function returns the id (generated with AUTO_INCREMENT) 
  //redirect to show page with generated id as a parameter
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Mahad Mohamed,home,index,html,code">
    <title>Login/Sign-Up</title>
    <link rel="stylesheet" type="text/css" href="Login&Create.css">
    <script src="Login&Create.js" defer ></script>
</head>
<body>
    <div class="container">
        <!--Login Page-->
        <form action="" class="form" id="login">
            <h1 class="form--title">Login</h1>
            <div class="form--input-group"> <!--Contain Input of Username-->
                <input type="text" class="form--input" autofocus placeholder="Username">
            </div>
            <div class="form--input-group"> <!--Contain Input of Password-->
                <input type="password" class="form--input" autofocus placeholder="Password">
            </div>
            <button class="form--button" type="submit">Continue</button>
            <p class="form--text">
                <a class="form--link" href ="./"id="linkCreateAccount">Create New Account?</a>
            </p>   
        </form>
        <!--Create Account Page-->
        <form  class="form form--hidden" id="createAccount" onsubmit="return validate();"  method="POST">
            <h1 class="form--title">Create Account</h1>
            <div class="form--input-group"> 
                <input type="text" class="form--input" name="name" id="name" autofocus placeholder="Username">
            </div>
            <div class="form--input-group"> 
                <input type="text" class="form--input" name="email" id="email"  autofocus placeholder="Email Address">
                <span class="error" id ="emailError"></span>
            </div>
            <div class="form--input-group">
                <input type="password" class="form--input" name="password" id="password" autofocus placeholder="Password">
                <div class="message"></div>
            </div>  
            <div class="form--input-group">
                <input type="password" class="form--input" name="cPassword" id="cPassword" autofocus placeholder="Confirm Password">
                <span class="error" id ="error"></span>
            </div>
            <button class="form--button" type="submit">Continue</button>
            <p class="form--text">
                <a class="form--link" href ="./"id="linkLogin">Already have an account? Login</a>
            </p>   
        </form>


    </div>




</body>