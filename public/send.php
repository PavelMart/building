<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новая заявка с сайта TURON Global Resource";
$body = "
<h2>Данные пользователя</h2>
<b>Имя:</b> $name<br>
<b>Емейл:</b> $email<br>
<b>Сообщение:</b> $message";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.beget.com'; // SMTP сервера вашей почты
    $mail->Username   = 'inbox@turongr.com'; // Логин на почте
    $mail->Password   = 'Ynm2f$Cc7gr'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('inbox@turongr.com', 'Web-site TURON'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('inbox@turongr.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);