

import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { useState } from 'react';

  const boardList = [
    {
      id: 1,
      title: "John"
    },
    {
      id: 2,
      title: "silly"
    }

  ]
   
  const test = boardList.map(function(item){return <div>{item.title}</div>});


export default function dnd(id, title){


const [board, setBoard] = useState([]);  

  const [{isDragging}, drag] = useDrag({
    type: "CARD",
    item1: {id:id},
    item2: {title:title},
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
  })

 const addImage = function(id, title){
  //      const boardList1 = boardList.filter((item) => item.id === id);
  //      setBoard(board => [...board, boardList1[0]]);
  
    }

  
  const [{isOver}, drop] = useDrop({
    accept: "CARD",
    item1: {id:id},
    item2: {title:title},
    drop: (item) => addImage(item.id),
      collect: monitor => ({
        isOver: !!monitor.isOver()
      })
  });




const boardImages = board.map(function(item){return <div>{item.title}</div>});  

return(


<div className="bg-gray-200">

<div ref={drag} opacity={isDragging ? '0.3' : '1'}>
{test}

</div>


<div ref={drop} className="box-border h-80 w-80 bg-blue-400">
{boardImages}

</div>


</div>


)

}



