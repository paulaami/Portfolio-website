<?php
require 'PHPMailer/PHPMailerAutoload.php';
require 'credentials.php';

if(isset($_POST['send'])) {
$to=$_POST['email'];

$name=$_POST['name'];
$mesg=$_POST['message'];

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = EMAILID;                 // SMTP username
$mail->Password = PASSWORD;                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom(EMAILID, 'Mailer');
$mail->addAddress($to);     // Add a recipient
//$mail->addAddress('paulinaamilkowska@gmail.com');               // Name is optional
$mail->addReplyTo(EMAILID, 'Information');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $name;
$mail->Body    = '<div style="background-color:orangered;padding:10px;"><h1>'.$mesg.'</h1></div>';
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