const express = require('express')
const { engine } = require('express/lib/application')
const app = express()

app.set("view engine", "ejs");

app.get("/", function(req, resp){
  const items = [
    {
      title:"A",
      message:"mor"
    },
    {
      title:"L",
      message:"inda"
    },
    {
      title:"I",
      message:"ncrivel"
    },
    {
      title:"N",
      message:"ormal (SQN)"
    },
    {
      title:"E",
      message:"special"
    }
  ]

  const subtitle = "O bicho ta pegando!! 🔥🔥"
  resp.render("index", {
    qualitys:items, subtitle
  })
})

app.get("/sobre", function(req, resp){
  resp.render("about")
})


app.listen(8080)
console.log("Rodando")