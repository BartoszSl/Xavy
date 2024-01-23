const express = require('express')

const Router = express.Router()

const Auth = require('../models/Auth')

Router.get('/',async(req,res)=>{
    res.send("login or reg")
})

Router.get('/fetchUser',async(req,res)=>{

    // const Id = req.params.id
    // const idset = await Auth.findById(Id)
    // res.json({user_data: idset});
    const { _id } = req.body;

    if (!_id) {
        return res.status(400).json({ error: 'Bark Id' });
    }

    try{
        const Id = await Auth.findOne({ _id });
        if (!Id) {
            return res.status(401).json({ error: 'error Nie ma takiego usera'});
        }

        res.status(200).json({ message: 'wYSZUKANO', Id });

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
    
    
})
// router.get('/:id', async (req, res, next) => {
    // const postId = req.params.pid
    // const post = await Post.findById(postId)
    // res.json({posts: post});
// });

Router.post('/login',async(req,res)=>{
    const { email, password } = req.body;

   
    if (!email || !password) {
        return res.status(400).json({ error: 'Emaila albo hasła brak' });
    }

    try {
        
        const email_set = await Auth.findOne({ email });

        
        if (!email) {
            return res.status(401).json({ error: 'error'});
        }

        
        if (email_set.password !== password) {
            return res.status(401).json({ error: 'Złe haslo.' });
        }

        
        res.status(200).json({ message: 'Zalogowany', email_set });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
    
})


Router.post('/signup',async(req,res)=>{
    const { firstName, surName, email, password, phoneNum  } = req.body;

    // Basic validation
    if (!firstName ||!surName ||!email || !password ||  !phoneNum) {
        return res.status(400).json({ error: 'Nie ma email albo hasla.' });
    }

    try {
        
        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email już użyty.' });
        }

        const newUser = new Auth({ firstName, surName, email, password, phoneNum, image:"",money:0, cart_id:"" });
        await newUser.save();

        res.status(201).json({ message: 'Zarejestrowany', user: newUser });
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Error' });
    }
})


module.exports = Router