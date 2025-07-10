const express=require("express")
const db=require("./Database")
const cors=require("cors")
const manage_asset=require("./Admin/manage_assets")
const book_assets=require("./User/book_assets")
const app=express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(manage_asset)
app.use(book_assets)
app.listen(3000,()=>{
    console.log("Server running at port 3000")
})