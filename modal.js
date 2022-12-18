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
const prenom = document.getElementById('first');
const formPrenom = document.getElementById('formPrenom');
function ControlePrenom() {
  if (!prenom.validity.valid) {
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
  if (!nom.validity.valid) {
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

const mail = document.getElementById('email');
const formEmail = document.getElementById('formEmail');
function ControleEmail() {
  if (!mail.validity.valid) {
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
const formConditions = document.getElementById('checkbox1');
function Conditions() {
  if (CheckCondition.checked) {
    setCookie('ConditionsValidées', 'OUI', 1);
    return true;
  } else {
    formConditions.setAttribute('data-error', "Veuillez accepter les conditions d'utilisation.");
    formConditions.setAttribute('data-error-visible', true);
    setCookie('ConditionsValidées', 'NON', 1);
    return false;
  };
};

const formNewsletter = document.getElementById('checkbox2');
function NewsLetter() {
  if (formNewsletter.checked) {
    setCookie('InscriptionNewsletter', 'OUI', 1)
  } else {
    setCookie('InscriptionNewsletter', 'NON', 1)
  };
  return true;
}

// Formulaire valide si toutes les verifications sont valides
function validate() {
  if (ControlePrenom() && ControleNom() && ControleEmail() && ControleDateNaissance() && ControleNbParticipations() && Location() && Conditions() && NewsLetter()) {
    // alert('Formulaire VALIDE');
    return true;
  } else {
    // alert('Formulaire NON VALIDE');
    return false;
  };
};
// Ticket #3 Validation des champs avec messages d'erreur personnlaisés.
// Ticket #2 Finaliser le formulaire //

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

