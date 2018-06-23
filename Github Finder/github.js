class Github{
    constructor(){
        this.client_id = '6f153f923ed90f4f3ebf';
        this.client_secret = '0f01353ae5ed803b8d8b5de90c51885fd4a0f79d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos 
        }
    }
}