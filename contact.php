<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php    
   if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'Contact Form'; 
        $to = 'geoakr84@pathfinder.gr'; 
        $subject = 'Message from a visitor';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
   
   if (!$_POST['name']){
      $errName ='Please enter your name';
    }
    
   if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_E-MAIL)){
       $erremail='Please enter a valid e-mail';
    }
    
    if (!$_POST['message']) {
    $errMessage = 'Please enter your message';
}
    
    
        
    if (!$errName && !$errEmail && !$errMessage) {
    if (mail ($to, $subject, $body, $from)) {
        $result='Thank You! I will be in touch';
    } else {
        $result='Sorry there was an error sending your message. Please try again later';
    }
}
}
 ?>
</body>
</html>