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