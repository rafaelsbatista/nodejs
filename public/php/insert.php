<?php
    include("../../db_settings.php");
    $data = json_decode(file_get_contents("php://input"));
    $usrname = mysql_real_escape_string($data->uname);
    $upswd = mysql_real_escape_string($data->text);
    $uemail = mysql_real_escape_string($data->email);

  mysql_connect('inmc.com.br.mysql', $db_user, $db_pass) or die(mysql_error()); 
  mysql_select_db('inmc_com_br') or die(mysql_error());
  mysql_query("INSERT INTO mensagem (nome,email,msg) VALUES ('$usrname', '$uemail', '$upswd')");
    
    Print "Your information has been successfully added to the database."; 
?> 