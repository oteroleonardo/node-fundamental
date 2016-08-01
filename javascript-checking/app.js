var assert = function (cond, msg) { console.log((cond ? "OK " : "FAIL ") + msg); }
    
// Initialization
var port = process.env.PORT || 3000;
var host = process.env.IP || "127.0.0.1";

assert(port === 3000, "|| operator helps to initialize variables with default values");



// Simple Array   [element1, element2, element3, ...]
var mySimpleArray = ["A", 1, function () { return "yes this can be an array element also" }, null, {}, port, host, undefined, true];
console.dir(mySimpleArray);

mySimpleArray.push("Let's think the Array also as an stack ;)");
console.dir(mySimpleArray);

mySimpleArray.pop(); // removed las element from stack  (LIFO)
console.dir(mySimpleArray);

mySimpleArray.unshift("Let's add an element at the beginning of the array"); // Can you imagine now how to create a FIFO list with this?
console.dir(mySimpleArray);
mySimpleArray.shift('We can also remove it from it\'s first element');
console.dir(mySimpleArray);

assert(mySimpleArray.length === 9, "The Array length is still 9.")



// Associative Array {key1: value1, key2: value2, key3: value3, ...} 
// IMPORTANT: Objects are also Associative Arrays ;)

var myAssociativeArray = {
  1: "A",
  "2": 1,
  "showMessage": function () { return "Yes, this can also be an array element" },
  _1: null,
  'empty': {}, // An empty Object == An empty Associative Array
  port: port,
  'host': host,
  ___: undefined,
  true: true && false
};
assert(mySimpleArray.length === 9, "The Array length is 9.")



// Functions

function isNimble() { return true; }
var canFly = function () { return true; };
var fly = {}; // fly is a reference to an empty object
fly.isDeadly = function () { return true; };

function yell(n) {
  return n > 0 ? yell(n - 1) + "a" : "hiy";
}

var ninja = function myNinja() {
  assert(ninja == myNinja, "This function is named two things - at once!");
};

console.log(typeof myNinja);
console.log(typeof ninja);

ninja = {
  yell: function (n) {
    return n > 0 ? ninja.yell(n - 1) + "a" : "hiy";
  },
  yell2: function (n) {
    return n > 0 ? ninja.yell2(n - 2) + "a" : "hiy";
  }

};

assert(ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either.");
assert(ninja.yell2(7) == "hiyaaaa", "A single object isn't too bad, either.");


// Objects
assert(this !== undefined, "Yes we are in the context of a global object so be careful when you reffer to 'this'")

var obj = {}; 
// How similar are functions to Objects
var fn = function () { };
assert(obj && fn, "Both the object and function exist.");

// Both are Objects and can have properties. 
obj.prop = "some value";
fn.prop = new String("some value");
assert(obj.prop == fn.prop, "Both are objects, both have the property.");
assert(obj.prop !== fn.prop
  && typeof fn.prop === "object"
  && typeof obj.prop === "string", "But they don't refer to the same string base type reference.");
fn.prop = "some value";
assert(typeof fn.prop === typeof obj.prop, "As we are using the same extensive way to define their values now both have the same reference.");

//Function context
var katana = {
  isSharp: true,
  use: function () {
    this.isSharp = !this.isSharp;
  }
};
katana.use();
assert(!katana.isSharp, "Verify the value of isSharp has been changed.");


function katanaStatus() {
  this.isSharp = true;
}
katanaStatus();
assert(isSharp === true, "A global object now exists with that name and value."); 
 
// Change running context.
var shuriken = {
  toss: function () {
    this.isSharp = true;
  }
};
shuriken.toss(); 



// How to handle scope
assert(shuriken.isSharp === true, "When it's an object property, the value is set within the object.");


var _ = require('lodash'); //lodash replaces underscore
weaponsBag = {
  slots: [
    { type: 'shuriken', subtype: 'NagareManji', efectivity: 60, maxDistance: 15 },
    { type: 'shuriken', subtype: 'Manji', efectivity: 50, maxDistance: 20 },
    { type: 'shuriken', subtype: 'KoburiRiuManji', efectivity: 45, maxDistance: 12 },
    { type: 'shuriken', subtype: 'KotoRyuTeppan', efectivity: 40, maxDistance: 10 },
    { type: 'knife', subtype: 'Kunai', efectivity: 70, maxDistance: 5 },
    { type: 'knife', subtype: 'Kunai', efectivity: 70, maxDistance: 5 },
    { type: 'bomb', subtype: 'SmokeBomb', efectivity: 70, maxDistance: 3, time: 3 },
    { type: 'bomb', subtype: 'SmokeBomb', efectivity: 70, maxDistance: 3, time: 3 },
    { type: 'dart', subtype: 'PoisonDart', efectivity: 80, maxDistance: 5 },
    { type: 'empty' },
  ],
  showBag: function () {
    console.dir(this.slots);
  },
  shurikensRain: function () {
    var _this = this;
    _.forEach(this.slots, function (weapon, index) {
      if (weapon.type == 'shuriken') {

        try {
          _this.slots[index] = { type: 'empty' };
        } catch (err) {
          assert(typeof _this.slots === 'undefined', "this.slot is undefined here, err: " + err.message);
        };
        assert(this != _this, "Closure to the rescue this!=_this ;)");
        _this.slots[index] = { type: 'empty' };

      }
    });
  },
  knivesRain: function () {
    _.forEach(this.slots, function (weapon, index) {
      if (weapon.type == 'knife') {
        this.slots[index] = { type: 'empty' };
      }
    }.bind(this));
  },
  throwBombs: function () {
    this.slots = _.map(this.slots, function (weapon) {
      return weapon.type == 'bomb' ? { type: 'empty' } : weapon;
    });
  },

};

weaponsBag.showBag();
weaponsBag.shurikensRain();
weaponsBag.showBag();
weaponsBag.knivesRain();
weaponsBag.showBag();
weaponsBag.throwBombs();
weaponsBag.showBag();


function substract(a, b) {
  return a - b;
}
assert(substract.call(this, 2, 1) == 1, ".call() takes individual arguments");
assert(substract.apply(this, [4, 2]) == 2, ".apply() takes an array of arguments");


// Callbacks
function loop(array, fn) {
  for (var i = 0; i < array.length; i++) { 
    // Implement me! 
  }
}
var num = 0;
loop([0, 1, 2], function (value) {
  assert(value == num++, "Make sure the contents are as we expect it.");
  assert(this instanceof Array, "The context should be the full array.");
});

function SuperNinja() {
  this.ninja_name = "Ninja";
}


// Using new
var superNinjaA = SuperNinja();
assert(!superNinjaA, "Is undefined, not an instance of SuperNinja.");
var superNinjaB = new SuperNinja();

assert(superNinjaB.ninja_name === "Ninja", "Property exists on the SuperNinja instance.");
assert(ninja_name === "Ninja", "Property exists on global Object.");


// Working with different instances.
function Samurai() {
  this.swung = false;
  
  // Should return true
  this.swingSword = function () {
    this.swung = !this.swung;
    return this.swung;
  };
}

var samurai = new Samurai();
assert(samurai.swingSword(), "Calling the instance method.");
assert(samurai.swung, "The samurai has swung the sword.");

var samuraiB = new Samurai();
assert(!samuraiB.swung, "Make sure that the samurai B has not swung his sword.");


// Side effects of not using new
function User(first, last) {
  if (!(this instanceof User))
    return new User(first, last);

  console.log("calle: " + arguments.callee);
  this.name = first + " " + last;
}

var name = "Otero";
var user = User("Leonardo", name);

assert(user, "This was defined correctly, even if it was by mistake.");
assert(name == "Otero", "The right name was maintained.");


// Introspection

function merge(root) {
  for (var i = 1; i < arguments.length; i++)
    for (var key in arguments[i])
      root[key] = arguments[i][key];
  return root;
}

var merged = merge({ name: "Leonardo" }, { city: "Buenos Aires" });
assert(merged.name == "Leonardo", "The original name is intact.");
assert(merged.city == "Buenos Aires", "And the city has been copied over.");


// Closures
var num = 10;

function addNum(myNum) {
  return num + myNum;
}

assert(addNum(5) == 15, "Add two numbers together, one from a closure.");


// Public and Private

function BlackNinja(weapon) {
  this.weapon = weapon;
  var slices = 0;

  this.getSlices = function () {
    return slices;
  };
  this.slice = function () {
    slices++;
  };
}

var ninja = new BlackNinja("Katana");
ninja.slice();
assert(ninja.getSlices() == 1, "We're able to access the internal slice data by using a methods.");
assert(ninja.slices === undefined, "But not using private attributes (those defined using var).");
assert(ninja.weapon === "Katana", "And BTW public data is also accesible to us, we just need to use this.");


// Calling anonymous functions

var add = (function (a, b) { return a + b; })(1, 2);
assert(add === 3, "Yes, we can call implicit functions");


// This is an Object and also an Associative Array;
var obj = { a: 1, b: 2 };

// This is a simple Array but also and Object;
var arr = [1, 2];

assert(typeof obj === 'object' && obj !== undefined, "Yes obj is of type object");
assert(obj instanceof Object, "It also is an instance of Object");
assert(obj.constructor === Object, "obj constructor is Object");
assert(!(obj instanceof Array), "obj is not an Array");

assert(Array.isArray(arr), "arr is an Array");
assert(typeof arr === 'object' && arr !== undefined, "And yes arr is of type object");

console.log("typeof arr:" + typeof arr);
assert(arr instanceof Object, "arr also is an instance of Object ;)");
assert(arr instanceof Array, "And it also is an instance of Array ;)");
assert(arr.constructor !== Object, "arr constructor is not Object");
assert(arr.constructor === Array, "arr constructor is Array");


//Initializing a library
var myLib = (function () {
  function myLib() { 
    // Initialize 
  } 
 
  // ... 
   
  return myLib;
})();

// Dealing with a broken closure and fixing it
var count = 0;
for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    assert(i == count++, "Check the value of i.");
  }, i * 200);
}

var count2 = 0;
for (var ii = 0; ii < 4; ii++) (function (ii) {
  setTimeout(function () {
    assert(ii == count2++, "Check the value of ii.");
  }, ii * 200);
})(ii);


// Using function prototype
function WhiteNinja() { };

WhiteNinja.prototype.swingSword = function () {
  return true;
};

var ninjaA = WhiteNinja();
assert(!ninjaA, "Is undefined, not an instance of WhiteNinja.");

var ninjaB = new WhiteNinja();
assert(ninjaB.swingSword(), "Method exists and is callable.");


//Overridding a function prototype
function NinjaStudent() {
  this.throwShuriken = function () {
    return true;
  };
}; 
 
// Should return false, but will be overridden 
NinjaStudent.prototype.throwShuriken = function () {
  return false;
};

var ninja = new NinjaStudent();
assert(ninja.throwShuriken(), "Calling the instance method, not the prototype method.");


// New method definition on already instantiated objects.  
function NinjaMaster() {
  this.swung = true;
}

var ninjaA = new NinjaMaster();
var ninjaB = new NinjaMaster();

NinjaMaster.prototype.swingSword = function () {
  return this.swung;
};

assert(ninjaA.swingSword(), "Method exists, even out of order.");
assert(ninjaB.swingSword(), "and on all instantiated objects.");