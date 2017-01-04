/// <reference path="../../typings/index.d.ts" />

import Model from "../../ts/todolist/model"
import IRecord from "../../ts/todolist/i_record"

describe('The TodoList model', () => {

  let storageKey = 'model_test',
      model: Model;

  beforeEach(() => {
    localStorage.removeItem(storageKey)
    model = new Model(storageKey);
  })

  it('should return an empty list upon creating', () => {
    expect(model.read()).toEqual([]);
  });

  it('should be able to create records', () => {
    let records: IRecord[] = model.create({task: 'task 1'});
    
    expect(records.length).toEqual(1);
  });

  it('should persist state between instantiations', () => {
    let records: IRecord[] = model.create({task: 'task 1'}),
        newModel: Model = new Model(storageKey),
        newInstRecords: IRecord[] = newModel.read();
    
    expect(newInstRecords.length).toEqual(1);
  });

  it('should auto-assign ID and Position', () => {
    let records: IRecord[] = model.create({task: 'task 1'});

    expect(records[0].id).toEqual(1);
    expect(records[0].position).toEqual(1);
  });

  it('should be able to delete a record', () => {
    model.create({task: 'task 1'});
    model.create({task: 'task 2'});
    model.create({task: 'task 3'});
    let records: IRecord[] = model.delete(2)

    expect(records).toEqual([
      {id: 1, position: 1, task: 'task 1'},
      // notice shifting of ID
      {id: 2, position: 2, task: 'task 3'}
    ]);
  });

  it('should be able to update a record', () => {
    model.create({task: 'task 1'});
    model.create({task: 'task 2'});
    model.create({task: 'task 3'});

    let records: IRecord[] = model.update(2, {task: 'otherTask'});

    expect(records).toEqual([
      {id: 1, position: 1, task: 'task 1'},
      {id: 2, position: 2, task: 'otherTask'},
      {id: 3, position: 3, task: 'task 3'}
    ]);
  });

});