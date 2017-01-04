/// <reference path="../../typings/index.d.ts" />

import View from "../../ts/todolist/view"
import IRecord from "../../ts/todolist/i_record"

describe('The TodoList view', () => {

  it('should throw an exception if no template could be found', () => {
    let elem = document.createElement('div');
    
    expect(new View(elem)).toThrowError("Template not found");
  });

  it('should render records', () => {
    let elem = document.createElement('div'),
        templateElem = document.createElement('script');
    templateElem.setAttribute('type', 'text/x-template');
    templateElem.setAttribute('data-template', 'records');
    templateElem.innerText = `
      <ul>
        <% 
        _.forEach(data.records, (record) => {
          %>
          <li><%- record.task %></li>
          <%
        }) 
        %>
      </ul>
    `;
    elem.appendChild(templateElem);

    let records = [
      {task: 'task 1'},
      {task: 'task 2'}
    ];

    let view = new View(elem);

    view.render(records);

    expect(elem.innerHTML).toMatch(/task 1/);
    expect(elem.innerHTML).toMatch(/task 2/);
    
  });

});