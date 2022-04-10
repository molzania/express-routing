const hewan = require('../models/hewan');

module.exports = {
  getAllHewan: (req, res) => {
    res.json({
      message: "berhasil mengambil data hewan",
      data: hewan
    })
  },

  getHewanByID: (req, res) => {
    const { id } = req.params
  
    const hewan = hewans.find(item => item.id == id )
  
    res.json({
      message: "berhasil mengambil data hewan by id",
      data: hewan
    })
  },

  addHewan:  (req, res) => {
    const data = req.body
  
    hewans.push(data)
    res.json({
      message: "success add data movies",
      data
    })
  },

  deleteHewanByID: (req, res) => {
    const { id } = req.params
  
    const hewan = hewans.filter(item => item.id != id )
  
    res.json({
      message: "berhasil menghapus data hewan by id",
      data: hewan
    })
  },

  updateHewanByID: (req,res) => {
    const {id, newAddHewan} = req.params
    const hewan = hewans.findOneAndUpdate({ _id: id }, {$set: newAddHewan}, ...)
    res.json ( {
      message: "berhasil mengupdate data hewan by id",
      data: hewan
    }
    )
  }
}