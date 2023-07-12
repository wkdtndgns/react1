import React, { useEffect,useState } from 'react';
import { observer } from 'mobx-react';
import totalStore from '../store';

const Post = observer(() => {
    const [id, setId] = useState('');
    const fetchPost = () => { postStore.fetchPost(id); };
    const postStore = totalStore.postStore;
    return (
        <div>
          <input data-state='good' type="number" minLength={1} value={id} onChange={e => setId(e.target.value)} />
          <button onClick={fetchPost}>요청</button>
        </div>
    );
});

export default Post;
