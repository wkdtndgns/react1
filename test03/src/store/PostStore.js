import { makeAutoObservable, autorun } from "mobx";
import axios from "axios";

class PostStore {
    post = [];
    constructor() {
        makeAutoObservable(this)

        autorun(() => {
            console.log('-------- autorun --------');
            console.log(this.post);
          })
    }
    

    fetchPost(id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => { 
       
         this.post = [...this.post, response.data]; 
       })
      .catch(error => { console.error("Error fetching post:", error); });
    }
}

export default new PostStore();
