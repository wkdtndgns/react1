import React from 'react';
import MyGrid from './MyGrid';
import totalStore from '../store';
import { observer } from 'mobx-react';

function Table () {
  const columns = [
    { header: 'id', name: 'id', align: 'center', width: 50},
    { header: '제목', name: 'title',align: 'center',  },
    { header: '본문', name: 'body',align: 'center', },
  ];

  return (
    <div>
       <h1>{totalStore.postStore.postCount}</h1>
       <MyGrid data={totalStore.postStore.post} columns={columns} />
    </div>
  );
}

export default observer(Table);