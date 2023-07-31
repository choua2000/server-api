const Auth = require('../models/auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize")

exports.signup = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const data = await Auth.findOne({ where: { phone } });
        if (data) {
            return res.status(404).json({ message: "exist phone" })
        }
        const newPassword = await bcrypt.hash(password, 10)
        const auth = await Auth.create({
            name,
            email,
            password: newPassword,
            phone
        })
        return res.status(200).json(auth)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

exports.filterName = async (req, res)=>{
    const {name} = req.query;
    const data = await Auth.findAll({where:{name:name}})
    return res.status(200).json(data)
}
//login
exports.signin = async (req, res) => {
    try {
        const { indentifier, password } = req.body;
        const data = await Auth.findOne({
            where: {
                [Op.or]: [{ phone: indentifier }, { email: indentifier }]
            },
        });
        if (!data) {
            return res.status(404).json({ message: "this data not found" })
        }
        const checkPass = await bcrypt.compare(password, data.password);
        if (!checkPass) {
            return res.status(404).json({ message: "you password incorrent" })
        }
        const token = await jwt.sign({
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone
        }, 'auth', { expiresIn: '24h' })
        return res.status(200).json({Token: token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
// delete
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Auth.findByPk(id);
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        await data.destroy();
        return res.status(201).json({ message: "deleted" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//select
exports.selectAuth = async (req, res) => {
    try {
        const data = await Auth.findAndCountAll({})
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

// get_id
exports.getAuth = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Auth.findByPk(id);
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//update

exports.updateAuth = async (req,res) =>{
    try {
        const {id} = req.params;
        const {name,email,password,phone} = req.body;
        const data = await Auth.findByPk(id);
        if(!data){
            return res.status(404).json({message:"not found"})
        }
        await data.update({
            name,
            email,
            password,
            phone
        })
         return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
