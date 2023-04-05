const axios = require('axios');


axios.put('http://localhost:3000/users/3',{
    "balance": 100.50,
    "bet": 10,
    "win" : 10,
    "tiles":["index1", "index2"],
    'winline':1
})
.then(res => {
    console.log(res.data);
})
.catch(error =>{
    console.log(error);
})