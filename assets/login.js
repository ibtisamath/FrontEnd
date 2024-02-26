const Form = document.querySelector("Form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
//const email = emailInput.value;
//const password = passwordInput.value;


function getusers ()  {
  Form.addEventListener("submit", async (event) => {
    event.preventDefault()
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    //const response = 
    await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => {
      if( response.ok) {
        window.sessionStorage.loged = true;
        window.location.href = "../index.html";
      }else{  
      }
      return response.json();
    })

    .then((data) => {
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      //console.error('Erreur inattendue lors de la connexion:', error);

    });
});
}
getusers()

const json = JSON.stringify({ email, passwordInput})
console.log(json)
//const modifyItem = document.querySelector(".modify h2"); //div modify-item (élément parent)
//const btnModify = document.createElement("span"); //bouton modifier
//btnModify.textContent = "modifier"; //texte du bouton
//const SvgIconModify = `<i class="far fa-edit"></i>`; // ajout de l'icone de modification
//modifyItem.appendChild(btnModify); //place le bouton dans la div modify-item
//ajoute la chaîne SVG en tant que nœud DOM à l'élément modify-item
//modifyItem.innerHTML += SvgIconModify;