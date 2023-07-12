import React from 'react';
import MyGrid from './MyGrid';
import totalStore from '../store';
import { observer } from 'mobx-react';

function Table () {
  const columns = [
    { header: 'id', name: 'id' },
    { header: '제목', name: 'title' },
    { header: '본문', name: 'body' },
  ];

  return (
    <div>
       <MyGrid data={totalStore.postStore.post} columns={columns} />
    </div>
  );
}

export default observer(Table);