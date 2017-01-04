
import IRecord from "./i_record";

export default class Model {

  constructor(public storageKey: string = 'TodoList') {

  }

  public create(record: IRecord): IRecord[] {
    return this.get_state();
  }

  public read(): IRecord[] {
    return this.get_state();
  }

  public update(id: number, newRecord: IRecord) {
    return this.get_state();
  }

  public delete(id: number) {
    return this.get_state();
  }

  private get_state(): IRecord[] {
    return [];
  }
  
  private set_state(state: IRecord[]) {
  }

}