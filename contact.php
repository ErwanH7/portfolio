
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "erwanharau7@gmail.com";
    $subject = "Nouveau message de $name";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Merci ! Votre message a été envoyé.";
    } else {
        echo "Une erreur est survenue. Essayez à nouveau.";
    }
}
?>
