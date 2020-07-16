import axios from 'axios';

export const solveMaze = (maze) => {
  return axios.post('http://localhost:5000/test', maze).then(response => {
    console.log('response');
    return response.data.solution;
  }).catch(error => {
    console.log('maze couldn\'t be solved');
  })
}