<?php
 function isValidPhoneNumber($input) {
  $phoneNumber = preg_replace('/[^0-9]/', '', $input);

  if (strlen($phoneNumber) < 9 || strlen($phoneNumber) > 15) {
    return false;
  }

  if (substr($input, 0, 1) === '+') {
    return true;
  }

  if (ctype_digit($phoneNumber)) {
    return true;
  }

  return false;
}

function isValidEmail($email) {
 return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

 $name=$_POST['name'];
 $email=$_POST['mail'];
 $phone=$_POST['phone'];
 $message=$_POST['message'];

 $error = "null";

 if(!empty($name) && !empty($email) && !empty($message) && isset($_POST['terms'])){
  $isValid=true;
  if($phone!=""){
    $isValid = isValidPhoneNumber($phone);
  }

  if ($isValid) {
   if (isValidEmail($email)) {
    if(strlen($message)<=1000){
     $subject=$name;
     $message="Name: ".$name."\n"."Email: ".$email."\n"."Phone: ".$phone."\n"."Message: \n".$message;
     mail('m.gondorek.kontakt@gmail.com', $subject, $message);
    }
    else{
     $error = "Message is too long (max 1000 characters)";
    }
   } 
   else {
    $error = "Invalid email";
   }
  } 
  else{
   $error = "Invalid phone number";
  }
 }else if(empty($name)){
  $error = "Name is empty";
 }else if(empty($email)){
  $error = "Email is empty";
 }else if(empty($message)){
  $error = "Message is empty";
 }else if(!isset($_POST['terms'])){
  $error = "Terms are not accepted";
 }

 echo $error;

?>