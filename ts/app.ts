/// <reference path="../typings_local/require.d.ts" />

import IConfig from "./i_config"

let config = <IConfig>require("../conf/app.json");

interface Window {
  TodoList: TodoListController
}

window.onload = () => {
  window['TodoList'] = new TodoListController(config);
}