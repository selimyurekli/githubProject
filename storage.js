class Storage{

    static getUsersFromStorage(){
        let users;
        if(localStorage.getItem("searched") ===null){
            users = [];

        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;

    }
    static addUsertoStorage(username){
        let users = this.getUsersFromStorage();
        if(users.indexOf(username) === -1){
            users.push(username);

        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searched");
    }
    



}