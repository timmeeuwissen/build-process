/// <reference path="../typings_local/require.d.ts" />

import IConfig from "./i_config"

let config = <IConfig>require("../conf/app.json");

window.onload = () => {
  document.body.innerHTML = config.color;
}