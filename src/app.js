import {Person} from './model/Person';
import {Data} from './model/Data';

global.app = function () {
    var christoph = new Person('Christoph', 'Burgdorf');
    console.log(christoph.fullName);
    console.log("Test 123 ret adsa", Data);
};