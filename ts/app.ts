/// <reference path="../typings_local/window.d.ts" />
/// <reference path="../typings_local/require.d.ts" />

import IConfig from "./i_config"
import TodoListController from "./todolist/controller"

let config = <IConfig>require("../conf/app.json");

window.onload = () => {
  window.TodoList = new TodoListController(config);
}