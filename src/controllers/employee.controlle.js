
const e = require('cors');
const Employee = require('../models/employee.model');
const employeeRoutes = require('../routes/employee.routes');

//create
exports.create = async (req, res) => {
    try {
        const { name, email, address, tel, } = req.body;
        if (!name || !email || !address || !tel) {
            return res.status(404).json({ message: 'value in empty' })
        }
        await Employee.create({
            name,
            email,
            address,
            tel
        })
        return res.status(201).json({ message: "created" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
// getAll
exports.select_all = async (req, res) => {
    try {
        const data = await Employee.findAndCountAll({})
        if (!data) {
            return res.status(404).json({ message: "not data" })
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//getOne
exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Employee.findByPk(id)
        if (!data) {
            return res.status(404).json({ message: "not data" })
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//update
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, address, tel } = req.body;
        const data = await Employee.findByPk(id)
        if (!data) {
            return res.status(404).json({ message: "not data" })
        }
        {
            await data.update({
                name,
                email,
                address,
                tel
            })
            return res.status(201).json(data)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//delete
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Employee.destroy({ where: { id: id } }).then((deleted) => {
            if (deleted) {
                return res.status(201).json({ message: "deleted" })
            }
            return res.status(404).json({ message: "not data" })
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}


