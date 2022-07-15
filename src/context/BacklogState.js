import React, { useState, createContext} from "react";
import { v4 } from 'uuid';
export const BacklogContext = createContext();

export const BacklogState = (props) =>{
    const [backlog, setBacklog] = useState([
        {
            id: 1,
            title: 'Backlog',
            cards: [
              { name: 'tasks 1', stage: 0, cid: v4() },
              { name: 'tasks 2', stage: 0, cid: v4() }
            ],
          },
          {
            id: 2,
            title: 'Todo',
            cards: [],
          },
          {
            id: 3,
            title: 'InProgress',
            cards: [],
          },
          {
            id: 4,
            title: 'Done',
            cards: [],
          }        
    ]);
return(
    <BacklogContext.Provider value={[backlog, setBacklog]}>
        {props.children}
    </BacklogContext.Provider>  
)
}