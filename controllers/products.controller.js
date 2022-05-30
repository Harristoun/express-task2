module.exports.productsController = {
    getProducts: (req,res) =>{
        res.json('apple')
    },
    getProductsId: (req,res)=> {
        res.json('appleId')
    },
    postProducts: (req,res)=> {
        res.json('изменить apple')
    },
    postProducts: (req,res) => {
        res.json('удалить apple')
    }
 }