/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//
	// class Block{
	//   constructor(width,height) {
	//     this.width = width;
	//     this.height = height;
	//   }
	//   area(){
	//     var num =this.width*this.height;
	//     console.log(num);
	//   }
	//   add(){
	//     console.log(this.width+this.height);
	//   }
	// }
	// let block1 = new Block(3,4);
	// let block3 = new Block(2,4);
	// let block2 = new Block(2,3);
	// block1.area();
	// block3.area();
	// block2.add();
	var Father = function () {
	  function Father() {
	    _classCallCheck(this, Father);
	  }

	  _createClass(Father, [{
	    key: 'sayHello1',
	    value: function sayHello1() {
	      console.log('hello1');
	    }
	  }]);

	  return Father;
	}();

	var Son = function (_Father) {
	  _inherits(Son, _Father);

	  function Son() {
	    _classCallCheck(this, Son);

	    return _possibleConstructorReturn(this, (Son.__proto__ || Object.getPrototypeOf(Son)).apply(this, arguments));
	  }

	  _createClass(Son, [{
	    key: 'sayHello2',
	    value: function sayHello2() {
	      console.log('hello2');
	    }
	  }]);

	  return Son;
	}(Father);

	var peter = new Son();
	peter.sayHello2();
	peter.sayHello1();

/***/ }
/******/ ]);