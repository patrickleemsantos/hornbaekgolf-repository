<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include('dbconnection.php'); 

$sql = "SELECT * FROM jos_content WHERE state = 1 AND publish_down = '0000-00-00 00:00:00' AND catid = 9 ORDER BY id DESC LIMIT 15";
				
$result = mysqli_query($con, $sql) or die(mysqli_error($con));
$total_rows = mysqli_num_rows($result);
if ($total_rows > 0) {
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		// $arr_response[] = array("title" => utf8_encode($row['title']), "introtext" => utf8_encode($row['introtext']));
		$arr_response[] = array("id" => $row['id'], "title" => utf8_encode($row['title']));
	}
} else {
	$arr_response[] = array('status' => 'empty');
}

echo json_encode($arr_response);

?>