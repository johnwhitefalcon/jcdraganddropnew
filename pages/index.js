
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
   


export default function dnd(){

  const test = boardList.map(function(item){return <div>{item.title}</div>});

const [board, setBoard] = useState([]);  

  const [{isDragging}, drag] = useDrag({
    type: "CARD",
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
  })

 const addImage = function(){
  //      const boardList1 = boardList.filter((item) => item.id === id);
  //      setBoard(board => [...board, boardList1[0]]);
  
    }

  
  const [{isOver}, drop] = useDrop({
    accept: "CARD",
    drop: function(){setBoard(boardList.map(function(item){return <div>{item.title}</div>}))},
      collect: monitor => ({
        isOver: !!monitor.isOver()
      })
  });




// const boardImages = board.map(function(item){return <div>{item.title}</div>});  

return(


<div className="bg-gray-200">

<div ref={drag} opacity={isDragging ? '0.3' : '1'}>
{test}

</div>


<div ref={drop} className="box-border h-80 w-80 bg-blue-400">
{board}

</div>


</div>


)

}