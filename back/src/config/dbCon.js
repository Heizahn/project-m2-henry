const mongoose = require("mongoose");

const uri = "mongodb+srv://heizahn:heizahn123@cluster0.5c9c30x.mongodb.net/hwHENRY?retryWrites=true&w=majority&appName=Cluster0"

async function dbCon(){
	try {
		await mongoose.connect(uri)
		console.log("Base de datos conectada exitosamente");
	} catch(err){
		console.log(err);
	}
}


module.exports = dbCon