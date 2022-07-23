const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const pool = require("./db");
const path=require("path")
const PORT=process.env.PORT ||5000;



//middleware
app.use(cors());
app.use(express.json())
//app.use(express.static("./client/build"))
//console.log(process.env.NODE_ENV)
console.log("Database_URL", process.env.DATABASE_URL);
if (process.env.NODE_ENV === 'production'){
  console.log(process.env.NODE_ENV)

  app.use(express.static(path.join(__dirname, "client/build")))
}



//routes
app.get('/register', function(req, res) {
    res.send("It works!");
});


//get all
app.get("/team", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM team");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

//update team
app.put("/team/:id", async(req,res)=> {
  try {
    //const {id}=req.params;
    const team =req.body.team
    const point=req.body.point
    console.log(req.params)
    console.log(req.body)
    const getFood =await pool.query("UPDATE team set point= point+$1 where team= $2 Returning *",[point,team])

    console.log(getFood.rows[0])
    res.json(getFood.rows[0])
  } catch (err){
    console.error(err.message)
  }


})

//update
app.put("/food/:id",async (req,res)=>{
  try{
    const {id}=req.params
    
    const name = req.body.food
    const unit= req.body.unit
    const carbon = req.body.carbon
    //console.log(name, unit,carbon)
    //console.log(req.body)
    const updateFood =await pool.query("UPDATE food SET food = $1, unit = $2, carbon = $3 WHERE id=$4",
    [name,unit,carbon,id])
    res.json("Food updated")
  }catch (err){
    console.error(err.message)
  }


})

//Delete
app.delete("/food/:id",async(req,res)=>{
  try{
    const {id}=req.params
    const deleteFood=await pool.query("DELETE FROM food WHERE id=$1",
    [id])
    res.json("Deleted")
  }catch(err){
    console.log(err.message)
  }


})

//  app.get("*",(req,res)=>{
//    res.sendFile(path.join(__dirname, "client/build/index.html"));

//  })

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "client/build/index.html"));

})

app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`)


})
