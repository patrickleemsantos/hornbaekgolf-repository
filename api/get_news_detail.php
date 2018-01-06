<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include('dbconnection.php'); 

$id = $_REQUEST['id'];

$sql = "SELECT introtext FROM jos_content WHERE id = $id";
				
$result = mysqli_query($con, $sql) or die(mysqli_error($con));
$total_rows = mysqli_num_rows($result);
if ($total_rows > 0) {
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$html = str_replace('src="', 'src="http://hornbaekgolf.dk/', $row['introtext']);
		$html = str_replace('<a', '<a class="external"', $html);

		$arr_response[] = array("html" => utf8_encode($html));
	}
} else {
	$arr_response[] = array('status' => 'empty');
}

echo json_encode($arr_response);

?>