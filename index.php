
<?php
 
$ch = curl_init();  
	 	$url = "localhost/test/text.php?name=myname";
	    curl_setopt($ch,CURLOPT_URL,$url);
	    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	 
	    $output=curl_exec($ch);
	 
	    curl_close($ch);
	    echo $output;