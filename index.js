const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');
const {solve} = require('./solver');
const PORT = process.env.PORT || 5000;
const path = require('path');
const app = express();

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'client/build')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  })
  .post('/test', (req, res) => {
    const solution = solve(req.body.maze)
    res.send({solution});
  })
  .listen(PORT, () => {
    console.log('app started');
  });

// const originalMaze = maze.map(item => item.slice());

// const solution = [];

// solve(maze);


// traverse(1, 1);
// console.log(chalkTable(originalMaze));

// solution.forEach((item, index) => {
//   setTimeout(() => {
//     originalMaze[item.x][item.y] = chalk.red('X');
//     console.clear();
//     console.log(chalkTable(originalMaze));
//   }, 400*index);
// });