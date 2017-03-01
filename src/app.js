import {Person} from './model/Person';
import { createStore } from 'redux';
import todoApp from './reducers';
import $ from 'jquery';

const store = createStore(todoApp);

global.app = function () {

    var christoph = new Person('Christoph', 'Burgdorf');
    //console.log(christoph.fullName);
};

global.addTodo = function () {

    let textVal = $('#newTodo').val();
    let tableElement = $('#todos');

    //Add Todo Action
    store.dispatch({type: 'ADD_TODO', id: 1, text: textVal});

    let state = store.getState();
    let todosInState = state.todos;

    tableElement.find('tbody').empty();

    for (var idx in todosInState) {

        let item = todosInState[idx];

        tableElement.append(
            '<tr> ' +
                '<td> ' + item.id + ' </td>' +
                '<td> ' + item.text + ' </td>' +
            '</tr>'
        );
    }
};