const User = require('../models/userModel');

module.exports = {
    async index(req, res){
        const user = await User.find();

        return res.json(user);
    },
    async store(req, res){
        const { name, email, blood } = req.body;

        if(name == "" || email == "" || blood == ""){
            return res.json({ error: "preencha todos os campos corretamente" });
        }else{
            const user = await User.create(req.body);

            return res.json(user);
        }
        
    }  
}