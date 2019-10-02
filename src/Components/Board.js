import React from "react";
import Square from "./Square";

import Fab from '@material-ui/core/Fab';
const results=Array(9).fill(null);
function Board(){
    const [winner,setWinner]=React.useState("");
    const [squares,setSquares]=React.useState([]);
    const [XisNext,setXisNext]=React.useState(false);
    const [reset,setReset]=React.useState(false);
    let wwinner;
    const newGame=()=>{
        setSquares(Array(9).fill(null));
        setXisNext(true);
    }

    const put=(i)=>{
        results[i]=XisNext?"X":"O";
    }

    React.useEffect(()=>{
        newGame();
        wwinner=""
    },[reset]);

    const resetGame=()=>{
        setReset(!reset);
        setSquares([]);
    }

    const Player=()=>{
       setXisNext(!XisNext);
    }

    const calculateWinner=()=>{
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            results[a] &&
            results[a] === results[b] &&
            results[a] === results[c]
          ) {
            return `The Player ${results[a]} won !! `;
          }
        }
        return null;
      }

      wwinner=calculateWinner();
      
    
    return(
        <div>
          <h1>Welcome To TIC-TAC-TOE</h1>
            <h3>{wwinner}</h3>
            <Fab color="secondary" onClick={()=>resetGame()}>+
            </Fab>
            <br/>
            <br/>
            <main>
                {squares.map((x,i)=>
                   <Square index={i} currentPlayer={XisNext?"X":"O"} changePlayer={Player} put={put}/>
                )}
            </main>
        </div>
    )}
  
export default Board;