import React, {useState} from 'react';
import './App.css';
import Cell from "./Cell";
import {solveMaze} from './service'

function App() {
  const base = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'S', '#', '#', '#', '#', '*', '#', '#', '#'],
    ['#', '*', '#', '*', '*', '#', '#', '#', '#', '#'],
    ['#', '*', '*', '*', '*', '#', '#', '*', '*', '#'],
    ['#', '*', '#', '*', '*', '#', '#', '*', '#', '#'],
    ['#', '*', '#', '#', '*', '*', '*', '*', '*', '#'],
    ['#', '*', '#', '#', '*', '#', '*', '#', '*', '#'],
    ['#', '#', '#', '#', '*', '#', '*', '#', '*', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '*', 'E'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ];
  const [maze, setMaze] = useState(base);

  const solve = () => {
    solveMaze({maze}).then(response => {
      animateSolution(response);
    });
  }

  const animateSolution = (solution) => {
    console.log('react', solution);
    const mazeCopy = [...maze];
    solution.forEach((item, index) => {
      setTimeout(() => {
        mazeCopy[item.x][item.y] = 'X';
        setMaze([...mazeCopy])
      }, 200*index);
    });
  }

  const onCellClick = (rowIndex, columnIndex) => {
    const mazeCopy = [...maze];
    const getPair = {
      '#': '*',
      '*': '#'
    }
    mazeCopy[rowIndex][columnIndex] = getPair[mazeCopy[rowIndex][columnIndex]];
    setMaze([...mazeCopy]);
  }

  return (<div>
      {
        maze.map((row, rowIndex) => {
          return <React.Fragment key={rowIndex.toString()}>
            {
              row.map((cell, cellIndex) => {
                return <Cell
                  mark={cell}
                  click={() => onCellClick(rowIndex, cellIndex)}
                  key={cellIndex.toString() + rowIndex.toString()}/>;
              })
            }
            <br />
          </React.Fragment>
        })
      }
      <button onClick={solve}>Start</button>
    </div>
  );
}

export default App;
