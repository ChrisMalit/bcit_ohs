const DB = require('../data/db');
const db = new DB();

exports.Index = async function(request, response) {
 const chemical = await db.getChemical();
 response.render('home/Index',{ chemical:chemical[0] })
};

exports.Other = function(request, response){
 response.render('home/Other');
};
