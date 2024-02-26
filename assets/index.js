// Récupération des éléments du DOM
const gallery = document.querySelector(".gallery")
const filters = document.querySelector(".filters")


// Fonction asynchrone pour effectuer une requête API et récupérer les œuvres
async function getworks() {
  const response = await fetch("http://localhost:5678/api/works");
  return await response.json();
}
getworks();

function createworks(work) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  img.src = work.imageUrl;
  figcaption.textContent = work.title;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  gallery.appendChild(figure);
}


async function displayworks() {
  const filter = await getworks(); //  ||  = ou affecte une valeur à la variable works
  gallery.innerHTML = ""; // Vide la galerie avant de l'afficher
  filter.forEach((work) => {
    createworks(work)
  });
}
displayworks();

// Fonction asynchrone pour effectuer une requête API et récupérer les œuvres
async function getcategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  return await response.json();
}
getcategories();


async function displaycategories() {
  const categories = await getcategories();
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category.name;
    filters.appendChild(btn);
    btn.id = category.id
  });
}
displaycategories();

async function filterworks() {
  const file = await getworks();
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach((button) => {
    button.addEventListener ("click", async (e) => {
      btnId = e.target.id;
      gallery.innerHTML = ""; // Vide la galerie avant de l'affiche
      if (btnId !== "0" ) {
        const btnworks = file.filter((work) => {
          return work.categoryId == btnId;
        });
        btnworks.forEach ((work) => {
          createworks(work)
          displayworks()
       });
      } else {
        displayworks(); 
      }

    });
  });
}

filterworks();

//Modification de la page en fonction de l'état de connexion de l'utilsateur
//const storage = window.sessionStorage.loged
    //const pass= localStorage.getItem("pass")

    //function isLoggedIn() {
     // return window.localStorage.getItem("enter");
   // }
    function logout() {
      window.location.href = "index.html";

    }

    //const isLoggedout = () => localStorage.getItem("enter") === null;
   // const isLoggedout = () => localStorage.getItem("token") == "false";
    
   const isLoggedIn = window.sessionStorage.loged 
    
//function login ()  {

const header = document.querySelector("header");
const ul = document.querySelector("header ul ");
const li = document.querySelectorAll(" ul li");
const login = li[2];
login.classList = "login"
const lilogin = document.querySelector(".login")
console.log(lilogin);
  //const pass = window.sessionStorage.loged
  if ( isLoggedIn == "true")  {
    lilogin.textContent = "logout";
    lilogin.addEventListener ("click" , () => {
      //localStorage.removeItem("token");
      window.location.href = "index.html";

      window.sessionStorage.loged = false
      //isLoggedout()
      //pass == "false";
    })
  } else {
    lilogin.textContent = "login";
    lilogin.addEventListener("click" , () => {
    window.location.href = "assets/login.html";
    })
  }
  
//banner
const banner = document.querySelector(".banner"); //div banner (élement parent)
const textBanner = document.createElement("p"); //création du paragraphe de banner
textBanner.textContent = "Mode édition";
const svgIconBanner = `
<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
`;
//place textBanner dans la div Banner
banner.appendChild(textBanner);
//ajoute la chaîne SVG en tant que nœud DOM à l'élément banner
banner.innerHTML += svgIconBanner;

//modify
const modifyItem = document.querySelector(".modify-item"); //div modify-item (élément parent)
const btnModify = document.createElement("a"); //bouton modifier
btnModify.textContent = "modifier"; //texte du bouton
//btnModify.classList = "modal-trigger"; //class qui permet d'ouvir la modale
const SvgIconModify = `<i class="far fa-edit"></i>`;
//SvgIconModifyclass.classList = "modal-trigger";
//`<svg class="modal-trigger" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg> `;
modifyItem.appendChild(btnModify); //place le bouton dans la div modify-item
//ajoute la chaîne SVG en tant que nœud DOM à l'élément modify-item
modifyItem.innerHTML += SvgIconModify;
const SvgIconModifyclass = document.querySelector(".modify-item i");
//SvgIconModifyclass.classList.add( "modal-trigger");
console.log(SvgIconModifyclass);

//isLoggedIn == "true"
if (  isLoggedIn === "true") {
  //si il est connecter
  banner.style.display = "flex"; // affiche banner
  modifyItem.style.visibility = "visible"; // affiche modify-item
  //si il n'est pas connecter
} else {
  banner.style.display = "none"; // affiche pas banner
  modifyItem.style.visibility = "hidden"; // affiche pas modify-item
}

//gestion des modales

const modalWrapper = document.querySelector(".modal-wrapper"); //récupere le container des modal (élément parent)
const modalTrigger = document.querySelector(".modal-trigger"); // sélectionne tous les élément ayant la class "modal-trigger"
const firstModal = document.querySelector(".modal-principale"); //première modal
//const modalTrigger = document.querySelector(".modal-trigger "); // sélectionne tous les élément ayant la class "modal-trigger"
const xmarkOne = document.querySelector(".modal-principale i"); //première modal
const secondModal = document.querySelector(".modal-secondaire"); //seconde modal
const buttonFirstModal = document.querySelector(".modal-principale-btn"); //bouton première modal
//const arrow = document.querySelector(".arrow"); //récuperation de la flèche de la deuxième modale
const overlay = document.querySelector(".overlay"); //récupere le container des modal (élément parent)

const iSecondModal = document.querySelectorAll(".modal-secondaire i"); //première modal
const arrow = iSecondModal[0]
const xmarkTwo = iSecondModal[1]; // croix de la seconde modale


//première modale et croix(avec modal-trigger)
//modalTrigger.forEach((trigger) => {
  modalTrigger.addEventListener("click", toggleModal); //au click dclenche la fonction toggle modal

  function toggleModal() {
    modalWrapper.style.display = "block";
    //modalWrapper.classList.toggle("active"); //rajoute la class "active si elle n'y est pas et rajoute display block/none"
    //firstModal.style.display = "block"; //remet la première modale en block après avoir fermé les deux modales
    secondModal.style.display = "none"; //seconde modal en none
  }
//});

xmarkOne.addEventListener("click", xModal); //au click dclenche la fonction toggle modal

  function xModal() {
    //modalWrapper.classList.toggle("active"); //rajoute la class "active si elle n'y est pas et rajoute display block/none"
    modalWrapper.style.display = "none"; //remet la première modale en block après avoir fermé les deux modales
    //secondModal.style.display = "none"; //seconde modal en none
  }
  overlay.addEventListener("click", modalWrappe); //au click dclenche la fonction toggle modal

  function modalWrappe (e) {
    console.log(e.target.className)
    //if( e.target.className == overlay) {
      modalWrapper.style.display = "none"; //retire modale

    //}
    //else{  
    //}
    //modalWrapper.classList.toggle("active"); //rajoute la class "active si elle n'y est pas et rajoute display block/none"
    modalWrapper.style.display = "none"; //remet la première modale en block après avoir fermé les deux modales
    //secondModal.style.display = "none"; //seconde modal en none
  }

  xmarkTwo.addEventListener("click", modalW); //au click dclenche la fonction toggle modal

  function modalW (e) {
    console.log(e.target.className)
    //if( e.target.className == overlay) {
    modalWrapper.style.display = "none"; //retire modale

    //}
    //else{  
    //}
    //modalWrapper.classList.toggle("active"); //rajoute la class "active si elle n'y est pas et rajoute display block/none"
    //modalWrapper.style.display = "none"; //remet la première modale en block après avoir fermé les deux modales
    //secondModal.style.display = "none"; //seconde modal en none
  }
//deuxième modal
buttonFirstModal.addEventListener("click", openSecondModal); //ajout d'un gestionnaire d'évement qui exécute la fonction openSecondModal

function openSecondModal() {
  firstModal.style.display = "none"; //première modal en none
  secondModal.style.display = "block"; //seconde modal en block
}

//retourne à la première modal
arrow.addEventListener("click", backToFirstModal); //ajout d'un gestionnaire d'évement qui exécute la fonction backToFirstModal

function backToFirstModal() {
  firstModal.style.display = "block"; //première modal en block
  secondModal.style.display = "none"; //seconde modal en none
}
////////////////////////////////////////////

//affichage des works dans le première modal + des icone poubelle
async function displayWorkModal() {
  const worksModal = document.querySelector(".work-modal");
  worksModal.innerHTML = ""; //vide le HTML
  const arrayModals = await getworks();
  arrayModals.forEach((works) => {
    const img = document.createElement("img");
    const figure = document.createElement("figure");
    //ajout de la l'icone "trash" 
    //const trash = document.createElement("i");
   // trash.classList.add("fas, fa-trash-alt, trash")

    //ajout de la l'icone "trash" 
    const span = document.createElement("span"); //parent des icônes poubelle
    const trashIcon = `<i class="fas fa-trash-alt"></i>`;
    span.innerHTML = trashIcon; // mise en place des icone dans le parent
    //div.id = works.id
    //trash.id = works.id; //récupère l'id des works sur les poubelles
    figure.appendChild(img);
    figure.appendChild(span);
    worksModal.appendChild(figure);
    span.id = works.id
    const trash = document.querySelector(".work-modal i ");
    console.log(trash);

    //trash.forEach((trashi) => {
    console.log(span);
     //récupère l'id des works sur les poubelles
  //})

    img.src = works.imageUrl; //src = le format de la base de donnée
  });
  deleteWorks(); // display est une fonction async appeler deleteWorks ici permet d'attendre que les trash soit créer
}
displayWorkModal(); // affihce tous les work dans la modal

//récupration de l'id des works
async function getWorkId() {
  const responseId = await fetch("http://localhost:5678/api/works");
  //retourne la liste des id
  return await responseId.json();
}
getWorkId();

//gestion de "CASE" et du formulaire de la deuxième modal
//récupération de case
const contentAddImg = document.querySelector(".case");

//récupération de content preview
const contentPreview = document.querySelector(".content-preview");

//création d'un élément image
const previewImgSelected = document.createElement("img");

// récupération du bouton qui permet de mettre une image
const addImgBtn = document.getElementById("add-img-btn");
const addProject = document.getElementById("addProject");
const erreurChampVide = document.getElementById("error-messageChamp");

//gestionnaire d'évenemtn sur le boutton d'ajout d'image
addImgBtn.addEventListener("input", () => {
  //on vérifie qu'un fichier est sélectionné
  //if (addImgBtn.files.length > 0) {
    //récupération du fichier
    const selectedImage = addImgBtn.files[0]
    //[0];
    //vérifications de la taille de l'image (en octets)
    const maxSizeInBytes = 4 * 1024 * 1024; // 4 Mo
    if (selectedImage.size > maxSizeInBytes) {
      //récupération de la span pour afficher un message d'erreur image trop grande
      const errorSizeImg = document.getElementById(
        "message-erreur-taille-image"
      );
      //ajout du texte dans la span
      errorSizeImg.textContent =
        "La taille de l'image ne doit pas dépasser 4 mo.";
      //réinialisation du champs image
      addImgBtn.value = "";
    } else {
      //création d'un objet URL pour l'image sélectionné
      const selectedImageUrl = URL.createObjectURL(selectedImage);

      //ajout de l'image sélectionné dans l'élément image créer
      previewImgSelected.src = selectedImageUrl;

      //masque le boutton d'ajout d'image pour affchier la preview
      contentAddImg.style.display = "none";

      //affchier la preview
      contentPreview.style.display = "block";

      //mettre l'image sélectionné dans "content preview"
      contentPreview.appendChild(previewImgSelected);
      addProject.textContent = "";
      erreurChampVide.textContent = "";
    }
    
  //}
    //catégories dynamique dans le formulaire d'envoie
  
      // Sélectionnez le bouton Valider
const validerButton = document.getElementById("submitValider");

//change la couleur du boutton valiser quand une image est sélestionné
validerButton.style.backgroundColor = "#1d6154";
validerButton.style.color = "white";

//contentPreview.reset();

////////////////////////////////////////

//});

getcategories()
      .then((categories) => {
        const categorieSelect = document.getElementById("categorie");

        categories.forEach((category) => {
          //création des catégories
          const optionElement = document.createElement("option");
          optionElement.value = category.id;
          optionElement.textContent = category.name;

          //mettre les catégories des les options du formulaire
          categorieSelect.appendChild(optionElement);
          //categories.value = null;
        });
      })
      .catch((error) => {
        console.error(error);
      });
    });


          
        
//fonction add work
function addWork() {

  //récupération du formulaire
  const form = document.getElementById("addWorkForm");
//console.log(token);
  //récupérer de la span "erreur un champ n'est pas remplie"
  const erreurChampVide = document.getElementById("error-messageChamp");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //récupération des champs du formulaire
    //const titleChamp = document.getElementById("title").value.trim();
   // const selectCategoriesChamp = document.getElementById("categorie").value;
//vérification du remplisage des champs
if (
  titleChamp === "" ||
  selectCategoriesChamp === "" ||
  addImgBtn.files.length === 0
) {
  erreurChampVide.textContent = "Un des champs est vide.";
} else {
  //remplisage de forData
  const formData = new FormData();
  formData.append("image", addImgBtn.files[0]);
  formData.append("title", titleChamp);
  formData.append("category", selectCategoriesChamp);
  const token = localStorage.getItem("token");

  fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
    //traitement de la réponse
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log(response)
        throw new Error("Erreur lors de l'ajout de l'œuvre");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Réponse de la requête : ", data);
      console.log(data);

      //appel des fonctions d'affichage des works et des works dana la modal
      displayWorkModal();
      displayworks();

      filterworks();
      //reset img
      contentAddImg.style.display = "flex";
      contentPreview.style.display = "none";

      //reset title & catégories
      form.reset();

      erreurChampVide.textContent = "";
      const addProject = document.getElementById("addProject");
      addProject.textContent = "Projet ajouté avec succès";
    
    })
    .catch((error) => {
      console.error(error);
    });
    //getcategories.reset();
    getcategories = null;


}
});
}
addWork();

if (addWork()) {
  //addProject.textContent = "";
  addProject.reset();
}

//fonction DELETE work
function deleteWorks() {
  //récupère tout les svg icone 
  const token = localStorage.getItem("token");

  const trashButton = document.querySelectorAll(".work-modal span");
  trashButton.forEach((trash) => {
    trash.addEventListener("click", () => {
      //grâce à parent.node on accède au parent des icone svg et on récupère leur ID qui est celui du works
      const id = trash.id;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      fetch("http://localhost:5678/api/works/" + id, options)
        .then((response) => {
          if (!response.ok) {
            // Si la réponse n'est pas OK, on lance une erreur qui sera capturée dans le bloc catch
            throw new Error("Erreur lors de la suppression de l'œuvre");
          }
        })
        .then(() => {
          // Si la suppression réussit, on affiche un message dans la console et met à jour l'affichage
          console.log("Suppression réussie");
      
          displayWorkModal();
          displayworks();
        })
        // Capture des erreurs lors de la requête
        .catch((error) => {
          console.error(error);
        });
    });
  });
}
deleteWorks();

//////////////////////////////////////
const json = JSON.stringify({ email, password })
console.log(json)
const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,

  },
}

console.log(options)
async function  btnvalider () {
  const validerButton = document.getElementById("submitValider");
  const addImgBtn = document.getElementById("add-img-btn");
  const titleChamp = document.getElementById("title").value;
  const selectCategoriesChamp = document.getElementById("categorie").value;

  if (
    titleChamp !== "" ||
    selectCategoriesChamp !== "" ||
    addImgBtn.files.length !== 0 
)
{
  
  validerButton.style.backgroundColor = "#1d6154";
} 

} 
addImgBtn.addEventListener("click", textaddImg); // vide les champs d'image et de message
function textaddImg() {
  const contentaddworks = document.querySelector(".content-addworks");
  addProject.textContent = "";
  erreurChampVide.textContent = "";

}