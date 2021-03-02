module.exports = {

    index(req , res){
        return res.render('index') // colocando a pagina inicial
    },

    albuns(req, res, next){
        return res.render('albuns')
    },
    todos(req , res, next){
        return res.render('todos')
    },
    postagens(req , res, next){
        return res.render('postagens')
    },
    

   

}