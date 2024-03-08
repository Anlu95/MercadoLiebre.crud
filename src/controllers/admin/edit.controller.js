const { loadData } = require("../../data");


module.exports = (req,res) => {
    const {id} = req.params
    const products = loadData()
    const productsFind = products.find(p => p.id === +id)
    res.render("admin/editProduct", {product:productFind}) 
}