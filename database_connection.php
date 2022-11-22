<?php

$serverName = "localhost";
$dBUserName = "root";
$dBPassword = "password";
$dBName = "assignment2";

function db_connect()
{
$db1 = new mysqli("localhost", "root", "password", "assignment2");
if (mysqli_connect_errno()) {
  $ech = "Database connection failed: ";
  $msg .= mysqli_connect_error();
  $msg .= " (" . mysqli_connect_errno() . ")";
  exit($msg);
}

return $db1;
}

function db_disconnect($db1)
{
if (isset($db1)) {
  mysqli_close($db1);
}
}