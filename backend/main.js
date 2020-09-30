const { MongoClient,ObjectID } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const { request, response } = require("express");

const client = new MongoClient("mongodb+srv://root:rootpass@cluster2.dmku2.mongodb.net/sample_mflix?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
const server = Express();

server.use(BodyParser.json());

server.use(BodyParser.urlencoded({extended:true, useUnifiedTopology: true }));
server.use(Cors());

var collection;

server.get("/search", async(request,response) => {
  try{
	let result = await collection.aggregate([
	{
	"$search": {"autocomplete": 
		{"query":`${request.query.term}`,"path":"title","fuzzy":{"maxEdits":2}}
	//	{"query":`${request.query.term}`,"path":"fullplot","fuzzy":{"maxEdits":2}}
	}
	
	}
	]).toArray();
  response.send(result);
  } catch(e){
	response.status(500).send({message: e.message});
  }


});

server.get("/get/:id", async(request,response) =>{
	try{
		let result = await collection.findOne({"_id": ObjectID(request.params.id)});
		response.send(result);

	} catch(e){
	response.status(500).send({message: e.message});
  }

})

server.listen("3000", async () => {
  try{
	await client.connect();
	collection = client.db("sample_mflix").collection("movies");
  } catch(e){
	console.error(e);
  }
});



