
type someCallback = (someString: string) => string;

export default class example_module {
  
  constructor(private someVar: string, private callback: someCallback) {
    
  }
  
  public some_method(){
    console.log('some method ran!');
  }
  
  public get_string(): string {
    this.some_method();
    return this.callback(this.someVar);
  }
  
}
