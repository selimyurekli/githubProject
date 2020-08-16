class UI{

    constructor(){
        this.profileDiv = document.getElementById("profile");
        this.inputArea =document.getElementById("githubname");
        this.clearAllSearchedButton = document.getElementById("clear-last-users");
        this.reposArea =document.getElementById("repos");
    }
    clearinput(){
        this.inputArea.value ="";
    }
    addUserToUI(user){
        this.profileDiv.innerHTML =`
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.userData.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.userData.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.userData.login}</strong></div>
             <hr>
             <div id="bio">${user.userData.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                follower <span class="badge badge-light">${user.userData.followers} </span>
                </button>
                <button class="btn btn-info">
                following  <span class="badge badge-light">${user.userData.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light"></span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.userData.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.userData.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${user.userData.email}</span>
                    </li>
                </div>
          </div>
    </div>
        `
    }
    
    addReposToUI(reposData){
        this.reposArea.innerHTML='';
        reposData.forEach(e => {
            this.reposArea.innerHTML +=`
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${e.html_url}" target = "_blank" id = "repoName">${e.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${e.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${e.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
            `
        });
    }
    showError(msg,tag){
        var node = document.createElement("p");
        node.textContent = msg;
        tag.appendChild(node);
        setTimeout(() => {
            node.remove();
        }, 2000);
    }
    showUsersInLastsFromLocalStorage(){
        
        let lastUsers = document.getElementById("lastSearch");

        let usersNames = Storage.getUsersFromStorage();
        usersNames.forEach(e=>{
            console.log(e);
            lastUsers.childNodes[1].innerHTML += `
            <li class="list-group-item">${e}</li>

            `; 
        })
        
    }
    addUserToLastUsers(username){
        
        let lastUsers = document.getElementById("last-users");
        var node = document.createElement("li");
        node.className = "list-group-item";
        node.textContent = username;
        lastUsers.appendChild(node);
        
        
        
    }

    clearUsersInLastUsers(){
        Storage.clearAllSearchedUsersFromStorage();
        let lastUsers = document.getElementById("lastSearch");
        lastUsers.childNodes[1].innerHTML=""

    }
    
        
    
    


}