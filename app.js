const form = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const lastSearch = document.querySelector("#lastSearch");
const clearUsersButton = document.querySelector("#clear-last-users");
const lastRepos = document.querySelector("#repos");
const github = new Github();
const users = [];
const ui = new UI();
eventListeners();

function eventListeners(){
    form.addEventListener("submit",getData);
    clearUsersButton.addEventListener("click", clearLastUsers);
    document.addEventListener("DOMContentLoaded",getAllSearched);
    let users=[];


    
}
function getData(e){
   let username = nameInput.value.trim();
   if(username ===""){
        setInterval(() => {
            //add error line <p> lütfen bir değer giriniz! </p>
        }, 2000);
   }else{
       github.getGithubData(username)
       .then(function(response){
           if(response.userData.message !=="Not Found"){
                ui.addUserToUI(response);
                ui.addReposToUI(response.userRepoData); 
                Storage.addUsertoStorage(response.userData.login);
                ui.addUserToLastUsers(response.userData.login);

           }
            else{
               ui.showError("Kullanıcı Bulunamadı",form);
               
               //kullanıcı bulunamadı.
           }          
       })
       .catch(err=> console.log(err)); 

   }

   ui.clearinput();
   e.preventDefault();
}


function clearLastUsers(){
   
    ui.clearUsersInLastUsers();

}

function getAllSearched(){
    ui.showUsersInLastsFromLocalStorage();

}