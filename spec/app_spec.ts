/// <reference path="../typings/index.d.ts" />

import ExampleModule from "../ts/example_module"

describe('A randon example module', () => {
    
    
    var RANDOM_STRING: string = 'Some String', 
        RANDOM_APPENDED_STRING: string = ' ran with callback',
    
        callback = (someString: string): string => {
          return someString + RANDOM_APPENDED_STRING;
        },
        exampleModule: ExampleModule;
    
    /**
     * Reset for each testcase the module, this enables that results
     * won't get mixed up. 
     */
    beforeEach(() => {
      exampleModule = new ExampleModule(RANDOM_STRING, callback); 
      spyOn(exampleModule, 'some_method');
    });

    /**
     * testing the outcome of a module
     * 
     * Should be doable for almost all methods of a module
     */
    it('should respond with a callback processed result', () => {
      let response = exampleModule.get_string();
      
      expect(response).toBe(RANDOM_STRING + RANDOM_APPENDED_STRING);
    });
    
    /**
     * testing that specific functionality is called
     * 
     * You could make use of this, when you expect a module to call
     * another module, and you want to make sure this happens.
     */
    it('should have called a specific method each time the string is retrieved', () => {
      // notice that, because of the beforeEach statement, the spy is reset
      expect(exampleModule.some_method).toHaveBeenCalledTimes(0);
      
      // execute logic twice
      exampleModule.get_string();
      exampleModule.get_string();
      
      // expect that the function is called twice.
      expect(exampleModule.some_method).toHaveBeenCalledTimes(2);
    });
});