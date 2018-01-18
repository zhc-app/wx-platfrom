
<?php  

$base64 = "data:image/jpeg;base64,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";
$base64 = str_replace('data:image/png;base64,', '', $base64);
// $base64 = str_replace(' ', '+', $base64);
$img = base64_decode($base64);
$a = file_put_contents('./test.jpeg', $img);//返回的是字节数
print_r($a);

?>