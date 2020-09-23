"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(ID, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n    ID is : " + id + "\n    Title is : " + title + "\n    Finished is : " + completed + "\n  ");
};
