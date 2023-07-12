import React, { useRef, useEffect } from 'react';
import Grid from 'tui-grid';

import 'tui-grid/dist/tui-grid.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-pagination/dist/tui-pagination.css';

Grid.applyTheme('striped');
// 생성됨 
let tui;

// 랜더할때 마다 
function MyGrid({ data, columns }) {
    const gridEl = useRef();

    useEffect(() => {
        if(tui === undefined){
            tui = new Grid({
                el: gridEl.current,
                data,
                columns
            });
        } else { 
            tui.resetData(data);
        }
    }, [data, columns]);


      return (
        <div>
            <div ref={gridEl}></div>
        </div>
    );
   
}

export default MyGrid;