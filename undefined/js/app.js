(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var Person = require("./model/Person").Person;

var Data = require("./model/Data").Data;

global.app = function () {
    var christoph = new Person("Christoph", "Burgdorf");
    console.log(christoph.fullName);
    console.log(Data);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3ZhZ3JhbnQvcmVkdXhfdHJhaW5pbmcvZXM2LWJhYmVsLWJyb3dzZXJpZnktYm9pbGVycGxhdGUvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBUSxNQUFNLFdBQU8sZ0JBQWdCLEVBQTdCLE1BQU07O0lBQ04sSUFBSSxXQUFPLGNBQWMsRUFBekIsSUFBSTs7QUFFWixNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDckIsUUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFdBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDckIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzb259IGZyb20gJy4vbW9kZWwvUGVyc29uJztcclxuaW1wb3J0IHtEYXRhfSBmcm9tICcuL21vZGVsL0RhdGEnO1xyXG5cclxuZ2xvYmFsLmFwcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaHJpc3RvcGggPSBuZXcgUGVyc29uKCdDaHJpc3RvcGgnLCAnQnVyZ2RvcmYnKTtcclxuICAgIGNvbnNvbGUubG9nKGNocmlzdG9waC5mdWxsTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhEYXRhKTtcclxufTsiXX0=
},{"./model/Data":2,"./model/Person":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = [{
    id: "58b67972fa6b2652e8ff02a7",
    isActive: true,
    name: "Moreno Avila",
    gender: "male",
    company: "ANDERSHUN",
    email: "morenoavila@andershun.com",
    phone: "+1 (927) 428-2538"
}, {
    id: "58b679723d9dc91058d5f1c5",
    isActive: false,
    name: "Noelle Harrell",
    gender: "female",
    company: "GORGANIC",
    email: "noelleharrell@gorganic.com",
    phone: "+1 (826) 578-3719"
}, {
    id: "58b67972785c462125799027",
    isActive: true,
    name: "Myra Aguilar",
    gender: "female",
    company: "COMVEY",
    email: "myraaguilar@comvey.com",
    phone: "+1 (941) 517-2489"
}, {
    id: "58b679727e3830dbc31ea4d3",
    isActive: true,
    name: "Brandi Skinner",
    gender: "female",
    company: "LUMBREX",
    email: "brandiskinner@lumbrex.com",
    phone: "+1 (936) 573-3937"
}, {
    id: "58b679725aee337435004d49",
    isActive: false,
    name: "Elise Bullock",
    gender: "female",
    company: "BIOLIVE",
    email: "elisebullock@biolive.com",
    phone: "+1 (982) 554-3463"
}, {
    id: "58b679722ffa933a11029a93",
    isActive: false,
    name: "Isabella Smith",
    gender: "female",
    company: "MUSAPHICS",
    email: "isabellasmith@musaphics.com",
    phone: "+1 (978) 404-2592"
}, {
    id: "58b67972ce863a6dde98b369",
    isActive: false,
    name: "Cecelia Jordan",
    gender: "female",
    company: "ACCEL",
    email: "ceceliajordan@accel.com",
    phone: "+1 (856) 527-2151"
}];
exports.Data = Data;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Person = (function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Person, {
        fullName: {
            get: function () {
                return "" + this.firstName + " " + this.lastName;
            }
        }
    });

    return Person;
})();

exports.Person = Person;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsInNyY1xcYXBwLmpzIiwiRDovdmFncmFudC9yZWR1eF90cmFpbmluZy9lczYtYmFiZWwtYnJvd3NlcmlmeS1ib2lsZXJwbGF0ZS9zcmMvbW9kZWwvRGF0YS5qcyIsIkQ6L3ZhZ3JhbnQvcmVkdXhfdHJhaW5pbmcvZXM2LWJhYmVsLWJyb3dzZXJpZnktYm9pbGVycGxhdGUvc3JjL21vZGVsL1BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBLElBQUksSUFBSSxHQUFHLENBQ1A7QUFDSSxRQUFNLDBCQUEwQjtBQUNoQyxjQUFZLElBQUk7QUFDaEIsVUFBUSxjQUFjO0FBQ3RCLFlBQVUsTUFBTTtBQUNoQixhQUFXLFdBQVc7QUFDdEIsV0FBUywyQkFBMkI7QUFDcEMsV0FBUyxtQkFBbUI7Q0FDL0IsRUFDRDtBQUNJLFFBQU0sMEJBQTBCO0FBQ2hDLGNBQVksS0FBSztBQUNqQixVQUFRLGdCQUFnQjtBQUN4QixZQUFVLFFBQVE7QUFDbEIsYUFBVyxVQUFVO0FBQ3JCLFdBQVMsNEJBQTRCO0FBQ3JDLFdBQVMsbUJBQW1CO0NBQy9CLEVBQ0Q7QUFDSSxRQUFNLDBCQUEwQjtBQUNoQyxjQUFZLElBQUk7QUFDaEIsVUFBUSxjQUFjO0FBQ3RCLFlBQVUsUUFBUTtBQUNsQixhQUFXLFFBQVE7QUFDbkIsV0FBUyx3QkFBd0I7QUFDakMsV0FBUyxtQkFBbUI7Q0FDL0IsRUFDRDtBQUNJLFFBQU0sMEJBQTBCO0FBQ2hDLGNBQVksSUFBSTtBQUNoQixVQUFRLGdCQUFnQjtBQUN4QixZQUFVLFFBQVE7QUFDbEIsYUFBVyxTQUFTO0FBQ3BCLFdBQVMsMkJBQTJCO0FBQ3BDLFdBQVMsbUJBQW1CO0NBQy9CLEVBQ0Q7QUFDSSxRQUFNLDBCQUEwQjtBQUNoQyxjQUFZLEtBQUs7QUFDakIsVUFBUSxlQUFlO0FBQ3ZCLFlBQVUsUUFBUTtBQUNsQixhQUFXLFNBQVM7QUFDcEIsV0FBUywwQkFBMEI7QUFDbkMsV0FBUyxtQkFBbUI7Q0FDL0IsRUFDRDtBQUNJLFFBQU0sMEJBQTBCO0FBQ2hDLGNBQVksS0FBSztBQUNqQixVQUFRLGdCQUFnQjtBQUN4QixZQUFVLFFBQVE7QUFDbEIsYUFBVyxXQUFXO0FBQ3RCLFdBQVMsNkJBQTZCO0FBQ3RDLFdBQVMsbUJBQW1CO0NBQy9CLEVBQ0Q7QUFDSSxRQUFNLDBCQUEwQjtBQUNoQyxjQUFZLEtBQUs7QUFDakIsVUFBUSxnQkFBZ0I7QUFDeEIsWUFBVSxRQUFRO0FBQ2xCLGFBQVcsT0FBTztBQUNsQixXQUFTLHlCQUF5QjtBQUNsQyxXQUFTLG1CQUFtQjtDQUMvQixDQUNKLENBQUM7UUFDTSxJQUFJLEdBQUosSUFBSTs7Ozs7Ozs7Ozs7OztJQ2pFTixNQUFNO0FBQ0csYUFEVCxNQUFNLENBQ0ksU0FBUyxFQUFFLFFBQVEsRUFBRTs4QkFEL0IsTUFBTTs7QUFFSixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM1Qjs7aUJBSkMsTUFBTTtBQU1KLGdCQUFRO2lCQUFBLFlBQUc7QUFDWCw0QkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7YUFDL0M7Ozs7V0FSQyxNQUFNOzs7UUFVSixNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFBlcnNvbiA9IHJlcXVpcmUoXCIuL21vZGVsL1BlcnNvblwiKS5QZXJzb247XG5cbnZhciBEYXRhID0gcmVxdWlyZShcIi4vbW9kZWwvRGF0YVwiKS5EYXRhO1xuXG5nbG9iYWwuYXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaHJpc3RvcGggPSBuZXcgUGVyc29uKFwiQ2hyaXN0b3BoXCIsIFwiQnVyZ2RvcmZcIik7XG4gICAgY29uc29sZS5sb2coY2hyaXN0b3BoLmZ1bGxOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhEYXRhKTtcbn07XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwzWmhaM0poYm5RdmNtVmtkWGhmZEhKaGFXNXBibWN2WlhNMkxXSmhZbVZzTFdKeWIzZHpaWEpwWm5rdFltOXBiR1Z5Y0d4aGRHVXZjM0pqTDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3U1VGQlVTeE5RVUZOTEZkQlFVOHNaMEpCUVdkQ0xFVkJRVGRDTEUxQlFVMDdPMGxCUTA0c1NVRkJTU3hYUVVGUExHTkJRV01zUlVGQmVrSXNTVUZCU1RzN1FVRkZXaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEZsQlFWazdRVUZEY2tJc1VVRkJTU3hUUVVGVExFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRM0JFTEZkQlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEyaERMRmRCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEY2tJc1EwRkJReUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0UVpYSnpiMjU5SUdaeWIyMGdKeTR2Ylc5a1pXd3ZVR1Z5YzI5dUp6dGNjbHh1YVcxd2IzSjBJSHRFWVhSaGZTQm1jbTl0SUNjdUwyMXZaR1ZzTDBSaGRHRW5PMXh5WEc1Y2NseHVaMnh2WW1Gc0xtRndjQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lIWmhjaUJqYUhKcGMzUnZjR2dnUFNCdVpYY2dVR1Z5YzI5dUtDZERhSEpwYzNSdmNHZ25MQ0FuUW5WeVoyUnZjbVluS1R0Y2NseHVJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHTm9jbWx6ZEc5d2FDNW1kV3hzVG1GdFpTazdYSEpjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWhFWVhSaEtUdGNjbHh1ZlRzaVhYMD0iLCJsZXQgRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiNThiNjc5NzJmYTZiMjY1MmU4ZmYwMmE3XCIsXHJcbiAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIk1vcmVubyBBdmlsYVwiLFxyXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcIkFOREVSU0hVTlwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJtb3Jlbm9hdmlsYUBhbmRlcnNodW4uY29tXCIsXHJcbiAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MjcpIDQyOC0yNTM4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjU4YjY3OTcyM2Q5ZGM5MTA1OGQ1ZjFjNVwiLFxyXG4gICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTm9lbGxlIEhhcnJlbGxcIixcclxuICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcIkdPUkdBTklDXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcIm5vZWxsZWhhcnJlbGxAZ29yZ2FuaWMuY29tXCIsXHJcbiAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MjYpIDU3OC0zNzE5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjU4YjY3OTcyNzg1YzQ2MjEyNTc5OTAyN1wiLFxyXG4gICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICBcIm5hbWVcIjogXCJNeXJhIEFndWlsYXJcIixcclxuICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcIkNPTVZFWVwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJteXJhYWd1aWxhckBjb212ZXkuY29tXCIsXHJcbiAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDEpIDUxNy0yNDg5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjU4YjY3OTcyN2UzODMwZGJjMzFlYTRkM1wiLFxyXG4gICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICBcIm5hbWVcIjogXCJCcmFuZGkgU2tpbm5lclwiLFxyXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgXCJjb21wYW55XCI6IFwiTFVNQlJFWFwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJicmFuZGlza2lubmVyQGx1bWJyZXguY29tXCIsXHJcbiAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MzYpIDU3My0zOTM3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjU4YjY3OTcyNWFlZTMzNzQzNTAwNGQ0OVwiLFxyXG4gICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRWxpc2UgQnVsbG9ja1wiLFxyXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgXCJjb21wYW55XCI6IFwiQklPTElWRVwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJlbGlzZWJ1bGxvY2tAYmlvbGl2ZS5jb21cIixcclxuICAgICAgICBcInBob25lXCI6IFwiKzEgKDk4MikgNTU0LTM0NjNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiNThiNjc5NzIyZmZhOTMzYTExMDI5YTkzXCIsXHJcbiAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICBcIm5hbWVcIjogXCJJc2FiZWxsYSBTbWl0aFwiLFxyXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgXCJjb21wYW55XCI6IFwiTVVTQVBISUNTXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcImlzYWJlbGxhc21pdGhAbXVzYXBoaWNzLmNvbVwiLFxyXG4gICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTc4KSA0MDQtMjU5MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCI1OGI2Nzk3MmNlODYzYTZkZGU5OGIzNjlcIixcclxuICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkNlY2VsaWEgSm9yZGFuXCIsXHJcbiAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICBcImNvbXBhbnlcIjogXCJBQ0NFTFwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJjZWNlbGlham9yZGFuQGFjY2VsLmNvbVwiLFxyXG4gICAgICAgIFwicGhvbmVcIjogXCIrMSAoODU2KSA1MjctMjE1MVwiXHJcbiAgICB9XHJcbl07XHJcbmV4cG9ydCB7RGF0YX1cclxuIiwiY2xhc3MgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtQZXJzb259XHJcbiJdfQ==
