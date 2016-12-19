/// <reference path="../../typings_local/require.d.ts" />
import IConfig from "../../ts/i_config"

let config = <IConfig>require("../../conf/app.json");

export default function() {

  this.Given(/^the config has the color set to ([^\s]+)$/, function (color: string) {
    if (config.color !== color) {
      throw "Color in config mismatches the test scenario";
    }
  });

  this.When(/^we look at the website$/, function () {
		this.browser.url('http://localhost:9080');
		return this.browser.waitForExist('body', 5000);
  });

  this.Then(/^I should be having a ([^\s]+) background$/, function (color: string) {
		let browserResponse = this.browser.executeAsync(function(color: string , done: (response: boolean) => void) {
      
      let compareElem = document.createElement("div");
      compareElem.style.backgroundColor = color;
      document.body.appendChild(compareElem);
      
      let bodyElem = document.querySelector('body');

      done(
        window.getComputedStyle(compareElem).backgroundColor == window.getComputedStyle(bodyElem).backgroundColor
      );
		}, color);

    if (!browserResponse.value) {
      throw "BackgroundColor didn't match!";
    }

  });

}