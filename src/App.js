const express = require('express');
const app = express();

app.use(express.json());
const notes = []

// http://localhost:3000/notes
app.post("/notes", (req,res)=>{
    notes.push(req.body);
    res.status(201).json({message: "Notes created successfully"});
});

app.get("/notes", (req, res)=>{
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes: notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
            message: "Notes Delted Successfully"
        });
})

app.patch("/notes/:index", (req,res)=>{
    const index = req.params.index;
    const des = req.body.description;
    notes[index].description = des;
    res.status(200).json({
        message: "Notes updated successfully"
    });
})

// status code meaning 













// app.get("/", (req,res)=>{
//     res.send("Hi i am home page");
// })

// app.get("/about", (req,res)=>{
//     res.send("Hi i am about page");
// })

// app.get("/profile/:name", (req,res)=>{
//     res.send(`Hi i am profile page of ${req.params.name}`);
// })


// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

module.exports=app;