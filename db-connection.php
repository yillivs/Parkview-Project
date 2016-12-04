<?php
	$servername = "localhost";
	$username = "root";
	$pass = "yang";

	//Create mysql connection

	$conn = new mysqli_connect($servername, $username, $pass)
	or die("Unable to connect to MySQL database.");
	
	echo "conected to MySQL<br>"


	//Select which db to use
	//insert db name
	$selected = mysqli_select_db("floyd", $conn);

	

	
?>
