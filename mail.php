<?php
$to = "info-plyus2018@mail.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи."; // тема полученного емайла
$message = "Тип номера: ".$_POST['type']."<br>";//присвоить переменной значение, полученное из формы name=name
  $message .= "Количество: ".$_POST['number']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Имя".$_POST['name']."<br>"; //полученное из формы name=message
$message .= "Город".$_POST['city']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>