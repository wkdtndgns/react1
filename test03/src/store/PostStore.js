import { makeAutoObservable, autorun ,runInAction } from "mobx";
import axios from "axios";

let postIdList = [];

class PostStore {
    post = [];
    constructor() {
        makeAutoObservable(this)
        autorun(() => {
            console.log('-------- autorun --------');
            console.log(this.postCount);
          })

          autorun(() => {
            console.log('-------- post  autorun --------');
            console.log(this.post);
          })
    }
    get postCount() {
        return this.post.length;
    }
    fetchPost(id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => { 
            let data = response.data;
            if(postIdList.includes(data.id) === false){
                postIdList.push(data.id);
                this.post.push(data);
            }else{
                alert('중복 데이터입니다.');
            }
       })
      .catch(error => { console.error("Error fetching post:", error); });
    }
}

export default new PostStore();
