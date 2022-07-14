function sendMessage() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "codingbyahlv@gmail.com",
    Password : "codeHam13Mol17!",
    To : 'hey@ahlv.se',/*en annan av dina mail */
    From : document.getElementById("email").value,/*hämtar anvs mail */
    Subject : "Meddelande från hemsidan",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}