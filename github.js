class Github{

    constructor(){
        this.url_user = "https://api.github.com/users/"
        this.url_repo = "https://api.github.com/users/"
    }
    async getGithubData(username){
        this.url_user ="https://api.github.com/users/"+username;
        this.url_repo ="https://api.github.com/users/"+username+"/repos";
       

        let user_data = await fetch(this.url_user);
        let user_repo_data= await fetch(this.url_repo);
        user_data =  await user_data.json();
        user_repo_data = await user_repo_data.json();


        return {
            userData: user_data,
            userRepoData : user_repo_data,
        }
    }
}