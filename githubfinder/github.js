class Github {
  constructor() {
    this.client_id = 'af1751e93d351816137d';
    this.client_secret = 'ddfbe9624e05c1828c706d52f3b631a43857a1fb';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();


    return {
      profile
    }
  }
} 