const axios = require('axios');

axios.get('http://localhost:3000/users')
.then(res => {
    let data = res.data;
    data.forEach(element => {
        console.log(`${element.userId}`)
    })
})
.catch(error =>{
    console.log(error);
})