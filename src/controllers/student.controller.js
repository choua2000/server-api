const Student = require('../models/student.model')

//create
exports.create = async (req, res) => {
    try {
        const { fisrtName, lastName, address, tel, status } = req.body;
        if (!fisrtName || !lastName || !address || !tel || !status) {
            // const data = await Student.create({ ...req.body });
            // if (!data) {
            return res.status(404).json({ message: " not data" })
        }
        await Student.create({
            fisrtName,
            lastName,
            address,
            tel,
            status
        })
        return res.status(201).json({ message: "created success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

//getstudent
exports.getstudent = async (req, res) => {
    try {
        const data = await Student.findAndCountAll({})
        if (!data) {
            return res.status(404).json({ message: "not data" })
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
//get one student
exports.getstudent_id = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Student.findByPk(id)
        if(!data){
            return res.status(404).json({message:"not fount"})
        }
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
// delete
exports.deletestudent = async (req,res) =>{
    try {
        const {id} = req.params;
        await Student.destroy({where:{id:id}}).then((success)=>{
        if(!success){
            return res.status(404).json({message:"not data"})
        }})
        return res.status(201).json({message:"deleted success"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
// updateData
 exports.updatestudent = async (req,res) =>{
    try {
        const {id} = req.params;
    const {fisrtName,lastName,address,tel,status} = req.body;
    const data = await Student.findByPk(id);
    if(!data){
        return res.status(404).json({message:"not data"})
    }
    await data.update({
        fisrtName,
        lastName,
        address,
        tel,
        status
    })
    return res.status(201).json({message:"updated"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
 }

