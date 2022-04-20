const express =require('express');
const app =express();
const cors = require('cors');
const port =process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users =[
    {id :1, name : 'razob', email : 'razob@gmail.com'},
    {id :2, name : 'khan', email : 'khan@gmail.com'},
    {id :3, name : 'elahee', email : 'elahee@gmail.com'},
    {id :4, name : 'ridwean', email : 'ridwean@gmail.com'},
    {id :5, name : 'razob', email : 'razob@gmail.com'}
]


app.get('/',(req,res) =>{
    res.send('Hello hlow  Mama ')
})



app.post('/user',(req,res) =>{
    console.log('request', req.body);
    const user =req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/users',(req,res) =>{
    if(req.query.name){
        const search =req.query.name.toLowerCase();
        const matched =users.filter(user =>user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users);
    }
    
})
app.get('/user/:id',(req,res) =>{
    console.log(req.params);
    const id =req.params.id;
    const user =users[id];
    res.send(user)
})

app.listen(port,() =>{
    console.log('Listen Port',port);
})