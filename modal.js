function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Ticket #1 - Evénement 'click' sur bouton fermeture
const btnClose = document.querySelector('.close');
btnClose.addEventListener('click', closeModal);

//Ticket #1 - Fermeture de la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
}

// Ticket #2 Finaliser le formulaire //
// Les champs autres que radio et checkbox sont contrôlés par HTML5
// Déclaration des éleménts DOM utilisés
const BtnRadio = document.getElementsByName('location');
const CheckCondition = document.getElementById('checkbox1');

// Ticket #3 Validation des champs <input> via l'API de validation JS pour utiliser les contraintes HTML
// par ajout d'un attribut (utilisation du CSS fourni)
// Sauf pour les champs Prénom, Nom et E-mail pas suffisemment fiables (utilisation de REGEX)

function validerNom(nom) {
  let regex = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  return regex.test(nom);
};

const prenom = document.getElementById('first');
const formPrenom = document.getElementById('formPrenom');
function ControlePrenom() {
  if (!validerNom(prenom.value)) {
    formPrenom.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    formPrenom.setAttribute('data-error-visible', true);
    setCookie('Prénom', '', 1);
    return false;
  } else {
    formPrenom.setAttribute('data-error-visible', false);
    setCookie('Prénom', prenom.value, 1);
    return true;
  };
};

const nom = document.getElementById('last');
const formNom = document.getElementById('formNom');
function ControleNom() {
  nom.value = nom.value.toUpperCase();
  if (!validerNom(nom.value)) {
    formNom.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    formNom.setAttribute('data-error-visible', true);
    setCookie('Nom', '', 1);
    return false;
  } else {
    formNom.setAttribute('data-error-visible', false);
    setCookie('Nom', nom.value, 1);
    return true;
  };
};

// Validation adresse mail par RegEx, plus fiable que le contrôle HTML
function validerEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const mail = document.getElementById('email');
const formEmail = document.getElementById('formEmail');
function ControleEmail() {
  if (!validerEmail(mail.value)) {
    formEmail.setAttribute('data-error', 'Veuillez entrer une adresse e-mail valide');
    formEmail.setAttribute('data-error-visible', true);
    setCookie('E-mail', '', 1);
    return false;
  } else {
    formEmail.setAttribute('data-error-visible', false);
    setCookie('E-mail', mail.value, 1);
    return true;
  };
};

const dateNaissance = document.getElementById('birthdate');
const formDateNaissance = document.getElementById('formDateNaissance');
function ControleDateNaissance() {
  if (!dateNaissance.validity.valid) {
    formDateNaissance.setAttribute('data-error', 'Veuillez entrer une date valide');
    formDateNaissance.setAttribute('data-error-visible', true);
    setCookie('DateDeNaissance', '', 1);
    return false;
  } else {
    formDateNaissance.setAttribute('data-error-visible', false);
    setCookie('DateDeNaissance', dateNaissance.value, 1);
    return true;
  };
};

const nbParticipations = document.getElementById('quantity');
const formNbParticipations = document.getElementById('formNbParticipations');
function ControleNbParticipations() {
  if (!nbParticipations.validity.valid) {
    formNbParticipations.setAttribute('data-error', 'Veuillez entrer une valeur entre 0 et 99');
    formNbParticipations.setAttribute('data-error-visible', true);
    setCookie('Nb participations', '', 1);
    return false;
  } else {
    formNbParticipations.setAttribute('data-error-visible', false);
    setCookie('Nb participations', nbParticipations.value, 1);
    return true;
  };
};

// Vérification : une ville sélectionnée
// (Un bouton radio coché)
//Boucle sur tous les boutons radio. Si un coché, incrémentation de j

const formVille = document.getElementById('formVille');
function Location() {
  let j = 0;
  for (let i = 0; i < BtnRadio.length; i++) {
    if (BtnRadio[i].checked) {
      j++;
      setCookie('Ville', BtnRadio[i].value, 1);
    };
  };
  //Si j > 0 alors valide
  if (j > 0) {
    formVille.setAttribute('data-error-visible', false);
    return true;
  } else {
    formVille.setAttribute('data-error', 'Veuillez sélectionner une ville.');
    formVille.setAttribute('data-error-visible', true);
    setCookie('Ville', '', 1);
    return false;
  }
};

// Vérification conditions d'utilisation acceptées
// (case cochée)
const formConditions = document.getElementById('formConditions');
const checkConditions = document.getElementById('checkbox1');
function Conditions() {
  if (checkConditions.checked) {
    setCookie('ConditionsValidées', 'OUI', 1);
    formConditions.setAttribute('data-error-visible', false);
    return true;
  } else {
    formConditions.setAttribute('data-error', "Veuillez accepter les conditions d'utilisation.");
    formConditions.setAttribute('data-error-visible', true);
    setCookie('ConditionsValidées', 'NON', 1);
    return false;
  };
};

const checkNewsLetter = document.getElementById('checkbox2');
function NewsLetter() {
  if (checkNewsLetter.checked) {
    // alert('coché');
    setCookie('InscriptionNewsLetter', 'OUI', 1)
  } else {
    setCookie('InscriptionNewsLetter', 'NON', 1)
    // alert('non coché');
  };
  return true;
}

// Ticket #4 Message de remerciement
//Gestion du message de remerciement.
const formulaire = document.getElementById('form');
const messageRemerciement = document.getElementById('messageRemerciement');
const btnMerci = document.getElementById('btnMerci');

function Message() {
  //Masquer le formulaire d'origine
  formulaire.className = 'notActive';
  //Afficher le message et le bouton de fermeture
  messageRemerciement.className = 'active';
};

btnMerci.addEventListener('click', function event() {
  //Réactiver le formulaire d'origine
  formulaire.className = 'active';
  //Masquer le message
  messageRemerciement.className = 'notActive';
  // forcer la fermuture de la modale
  closeModal();
  //Réinitialiser le formulaire
  formulaire.reset();
});
// fin : Ticket #4 Message de remerciement


// Formulaire valide si toutes les verifications sont valides

formulaire.addEventListener('submit', function validate(e) {
  e.preventDefault();
  if (ControlePrenom() && ControleNom() && ControleEmail() && ControleDateNaissance() && ControleNbParticipations() && Location() && Conditions() && NewsLetter()) {
    // alert('Formulaire VALIDE');
    funcConsole();
    Message();
    return true;
  } else {
    // alert('Formulaire NON VALIDE');
    return false;
  };
});

// fin : Ticket #3 Validation des champs avec messages d'erreur personnlaisés.
// fin : Ticket #2 Finaliser le formulaire //



//Gestion des cookies (source : https://www.w3schools.com/js/js_cookies.asp )
//Création cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Lecture cookie
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Vérification cookie
function checkCookie(CookieName) {
  let cookie = getCookie(CookieName);
  if (cookie != "") {
    console.log(CookieName + ' : ' + cookie);
  } else {
    console.log('Cookie ' + CookieName + ' non défini.')
  }
}

//Affichage dans la console des champs du formulaire.
function funcConsole() {
  let champsForm = document.getElementsByTagName('input');
  for (let i = 0; i < champsForm.length; i++) {
    if (champsForm[i].type == 'text' || champsForm[i].type == 'email' || champsForm[i].type == 'date' || champsForm[i].type == 'number') {
      console.log(champsForm[i].name, champsForm[i].value);
    } else if (champsForm[i].type == 'radio') {
      console.log(champsForm[i].value, champsForm[i].checked);
    } else if (champsForm[i].type == 'checkbox') {
      console.log(champsForm[i].id, champsForm[i].checked)
    };
  };
};
