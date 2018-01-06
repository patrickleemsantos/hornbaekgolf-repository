<?php

define('DB_HOST', 'database');
define('DB_USERNAME', 'hornb_j30');
define('DB_PASSWORD', 'y8Veveha');
define('DB_DEFAULT', 'hornbaekdk_j30');

$con = mysqli_connect(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_DEFAULT);

if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

?>