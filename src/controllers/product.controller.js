const Product = require('../models/product.model')

// CREATE
exports.create = async (req, res) => {
    try {
        await Product.create({ ...req.body });
        return res.status(201).json({ message: "created" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//SELECT 

exports.selectAll = async (req, res) => {
    try {

        const data = await Product.findAndCountAll({});
        if (!data) {
            return res.status(404).json({ message: "Invalid" })
        }
        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//GETBYID
exports.get_id = async (req, res) => {
    try {
        const id = req.params.id;
        const data_id = await Product.findByPk(id)
        if (!data_id) {
            return res.status(404).json({ message: "not fount" })
        }
        return res.status(200).json(data_id)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//DELETE
exports.delete_data = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.destroy({ where: { id: id } }).then((deleted) => {
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
//UPDATE

exports.update_id = async (req, res) => {
    try {

        const { id } = req.params;
        const { pd_name, pd_price } = req.body;
        const data = await Product.findByPk(id);
        if (!data) {
            return res.status(404).json({ message: "this id not found" })
        }

        await data.update({
            pd_name,
            pd_price
        })

        return res.status(201).json({ message: "updated" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}