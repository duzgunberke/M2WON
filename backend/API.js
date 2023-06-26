const express = require('express');
const fs = require("fs")
var bodyParser = require('body-parser')
const app = express()
const cors=require("cors")
app.use(express.json());
app.use(cors())
const file="../frontend/src/constants/discord.json"


app.post('/api/writeTheFile', async (req, res) => {
    let data=req.body.data
    await fs.writeFile(file,
     `{
      "discordId":"${data}"
      }
  `,"utf-8",()=>{})
    res.status(200).json({status:"super"})
    
 
});

app.listen(3000, () => {
  console.log('Sunucu çalışıyor...');
});