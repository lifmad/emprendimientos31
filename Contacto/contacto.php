<?php<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$comentarios = $_POST['comentarios'];
$telefono = $_POST['telefono'];

$servicio = $_POST['opcionesSelect'];

$to = 'javascripttt.3.14@gmail.com';
$email_subject = "Nuevo mensaje: de la web"; 
$email_body = "Haz recibido un nuevo mensaje 
              \n Nombre: $nombre 
              \n Correo: $email
              \n Mensaje o consulta: \n $comentarios \n"; 
$headers= "De:$email";


mail($to, $email_subject, $email_body, $headers); 
echo'Pronto nos estaremos comunicando con usted!';
?>
<Br>
<Br>
<button><a href=".html">Volver</a></button>