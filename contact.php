<?php

require 'PHPmailer/PHPMailerAutoload.php';
require 'credentials.php';

if(isset($_POST['send'])) {
$to=$_POST['email'];

$name=$_POST['name'];
$mesg=$_POST['message'];

$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;
$mail->Username = EMAILID; 
$mail->Password = PASSWORD;
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 
$mail->setFrom(EMAILID, 'Mailer');
$mail->addAddress($to);  
$mail->addReplyTo(EMAILID, 'Information');

$mail->isHTML(true); 

$mail->Subject = $name;
$mail->Body    = '<div style="background-color: bisque;padding:10px;"><h1>'.$mesg.'</h1></div>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo '<script language="javascript">';
    echo 'alert("Wiadomość nie została wysłana. Spróbuj ponownie później.")';
  echo '</script>';
  
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  echo '<script language="javascript">';
    echo 'alert("Dziękuję, wiadomość została wysłana!")';
  echo '</script>';
}
}
?>
