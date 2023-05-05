import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react"
const initialBoard = ['','','','','','','','',''];
export const TicTacToe =()=>{

    const[gameState, setGameState] = useState(initialBoard);
    const[isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = (index) =>{
        let strings = Array.from(gameState);   
        if(strings[index] !==''){
            return;
        }

        strings[index] = isXTurn ? 'X' : 'O';
        setGameState(strings);
        setIsXTurn(!isXTurn);
    }

     return(
        <div>
            <div className="game"> 
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState} onSquareClick={onSquareClick}/>
            </div>
        </div>
    );

}