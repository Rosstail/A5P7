<?php

if(isset($_POST['submit'])) {      // Si le formulaire a été soumis (variable $_POST[] définie)

  // Récupération des variables user_surname, user_name...
  $surname = $POST['user_surname'];
  $name = $_POST['user_name'];
  $mail = $_POST['user_mail'];
  $object = $_POST['user_object'];
  $message = $_POST['user_message'];

  // Variables concernant l'email
  $destinataire = 'test@gmail.com';          // Adresse email du webmaster
  // Contenu du message de l'email (en HTML)
  $contenu = '<html><head><title> '.$object' </title></head><body>';
  $contenu .= '<p>Nouveau message !</p>';
  $contenu .= '<p><strong>Nom</strong>: '.$surname' </p>';
  $contenu .= '<p><strong>Prénom</strong>: '.$name' </p>';
  $contenu .= '<p><strong>E-mail</strong>: '.$mail' </p>';
  $contenu .= '<p><strong>Message</strong>: '.$message' </p>';
  $contenu .= '</body></html>';

  // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
  $headers = 'MIME-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";

  // Envoyer l'email
  mail($destinataire, $objet, $contenu, $headers);          // Fonction principale qui envoi l'email
  header("location:contact.html");                            // Afficher un message pour indiquer que le message a été envoyé
  // Fin du code pour traiter l'envoi de l'email

  echo "user_surname".$surname;           // Récupère la valeur d'user_surname saisie par l'utilisateur
  echo "user_name".$name;
  echo "user_mail".$mail;
  echo "user_object".$object;
  echo nl2br("user_message".$message);       // La fonction nl2br permet de prendre en compte les sauts de ligne
}

?>
