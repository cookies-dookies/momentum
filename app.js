//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


const focusSchema = {
  name: String
};

const Focus = mongoose.model("Focus", focusSchema);

const focusListSchema = {
  name: String,
  items: [focusSchema]
};

const focusList = mongoose.model("FocusList", focusListSchema);


const pomodoroSchema = {
  name: String
};

const Pomodoro = mongoose.model("Pomodoro", pomodoroSchema);

const pomodoroListSchema = {
  name: String,
  pomodoros: [pomodoroSchema]
};

const pomodoroList = mongoose.model("PomodoroList", pomodoroListSchema);



app.get("/",function(req,res){
  Focus.find({}, function(err, foundItems){
      res.render("focus", {listTitle: "What is your main focus for today?", FocusItems: foundItems});
  });
})

app.get("/todo", function(req, res) {
  Item.find({}, function(err, foundItems){
      res.render("list", {listTitle: "To do", newListItems: foundItems});
  });
});

app.get("/pomodoro",function(req,res){
  Pomodoro.find({}, function(err, foundItems){
      res.render("pomodoro", {listTitle: "What are you working on?", PomodoroItems: foundItems});
  });
})

app.post("/" ,function(req,res){
  const focusName = req.body.focus;
  const focus = new Focus({
    name: focusName
  });

    focus.save();
    res.redirect("/");
});

app.post("/todo", function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const todoItem = new Item({
    name: itemName
  });
    todoItem.save();
    res.redirect("/todo");
});

app.post("/pomodoro" ,function(req,res){
  const pomodoroName = req.body.pomodoro;
  const pomodoro = new Pomodoro({
    name: pomodoroName
  });
    pomodoro.save();
    res.redirect("/pomodoro");
});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
    Focus.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
});

app.post("/deleteToDo", function(req, res){
  const checkedItemId = req.body.checkbox;
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/todo");
      }
    });
});

app.post("/deletePomodoro", function(req, res){
  const checkedItemId = req.body.checkbox;
    Pomodoro.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/pomodoro");
      }
    });
});

let port = process.env.PORT;

if (port==null || port == ""){
  port=3000;
}
app.listen(port, function() {
  console.log("Server started on port 3000");
});
