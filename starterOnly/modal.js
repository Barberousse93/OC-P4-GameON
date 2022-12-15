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

// Vérification : une ville sélectionnée
// (Un bouton radio coché)
//Boucle sur tous les boutons radio. Si un coché, incrémentation de j
function Location() {
  let j = 0;
  for (let i = 0; i < BtnRadio.length; i++) {
    if (BtnRadio[i].checked) {
      j++;
    };
  };
  //Si j > 0 alors valide
  if (j > 0) {
    alert('Location VALIDE')
    return true;
  } else {
    alert('Location NON VALIDE')
    return false;
  }
};

// Vérification conditions d'utilisation acceptées
// (case cochée)
function Conditions() {
  if (CheckCondition.checked) {
    alert('Conditions VALIDE');
    return true;
  } else {
    alert('Conditions NON valide');
    return false;
  };
};

// Formulaire valide si toutes les verifications sont valides
function validate() {
  if (Location() && Conditions()) {
    alert('Formulaire VALIDE');
    return true;
  } else {
    alert('Formulaire NON VALIDE');
    return false;
  }
}
// Ticket #2 Finaliser le formulaire //