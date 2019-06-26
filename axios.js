var axios = require('axios');

var url = 'http://localhost:3000/';
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTYxMjk5MzA2fQ.q9nLODAVpet8xKBTe63j7dA7SsUtT7veMcw7znEdwFI';

axios.get('http://localhost:3000/users', { headers: {"Authorization": `JWT ${token}`}})
  .then(function (response) {
    console.log(response.data);
})
  .catch(function (error) {
    console.log(error);
})

// axios.post(url+ 'users/login', { email: "doll@dolldot.com", password: "doll"})
//   .then(function (response){
//       console.log(response.data);
// })
//   .catch(function (error){
//       console.log(error);
// })
