import EventEmitter from 'events';
import Dispatcher from './Dispatcher';

/**
 * Data is private and not exposed to the outside world
 */
class TodoStore {
    constructor() {
        this.data = [];
    }

    create(text) {
        this.data.push(text);
        return this.data.length - 1;
    }

    find(id) {
        if (typeof id === 'undefined') {
            return this.data;
        } else {
            if ((id < 0) || (id >= this.data.length))
                return null;
            return this.data[id];
        }
    }
}

var _todos = new TodoStore();

/**
 * Todo store's public interface
 * USAGE:
 *   Todos.on('change', function() {});
 *   Dispatcher.dispatch({ actionType: 'create_todo', text: 'hello' });
 *   Todos.removeListener('change', callback);
 */
class Todos extends EventEmitter {
    constructor() {
        Dispatcher.register(this.onAction.bind(this));
    }

    find(id) {
        return _todos.find(id);
    }

    onAction(action) {
        switch(action.actionType) {
            case 'create_todo':
                _todos.create(action.text);
                this.emit('change');
            break;
        }        
    }

}

export default new Todos();