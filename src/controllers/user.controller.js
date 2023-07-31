const User = require('../models/user.model')

//CREATEUSER
exports.create = async (req, res) => {
    try {
        const data = await User.create({ ...req.body });
        return res.status(201).json({ message: "created" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//GETALLUSER

exports.getAll = async (req, res) => {
    try {
        const data = await User.findAndCountAll({})
        if (!data) {
            return res.status(404).json({ message: "not data" })
        }
        return res.status(201).json(data)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//get_id
exports.get_id = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByPk(id)
        if (!data) {
            return res.status(404).json({ message: "not found" })

        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//update_data

exports.updatedata = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, tel } = req.body;
        const data_id = await User.findByPk(id)
        if (!data_id) {
            return res.status(404).json({ message: "not found" })
        }
        await data_id.update({
            name,
            email,
            tel
        })
        return res.status(201).json(data_id)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//delete 

exports.delete_id = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id: id } }).then((deleted) => {
            if (!deleted) {
                return res.status(404).json({ message: "not found" })
            }
            return res.status(201).json({ message: "deleted" })
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}