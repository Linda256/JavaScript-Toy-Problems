/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
//   // TODO: Your code here
//   on : function(change, function(){
//     {
//       // get the key from change
//       // pass key to callback function
//       // var ready =  function(){
//         // console.log(`{key} changed`) }
//       for (k in obj){
//         if (change === `{obj[k]}+Change`){
//         trigger(`{obj[k]}+Change`);
//       }

//       }
//     }

//   },
//   trigger: function(triggerChange){
//     // get the key from triggerChange;
//     // ready()
//     if (changeTriggered = ageChange)

//   }
//   return obj;
// };
  // TODO: Your code here
  var tempObj = {};
  tempObj.memo = {};

  tempObj.on = function(trigger, callback) {
    var index = trigger;
    obj.memo[index] = callback;
  };

  tempObj.trigger = function() {
    var args = Array.from(arguments);
    args.forEach(function(triggerPhrase) {
      if (obj.memo[triggerPhrase]) {
        obj.memo[triggerPhrase]();
      }
    });
  };

  var test = Object.create(tempObj);
  obj = Object.assign(test, obj);

  return obj;
};

var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ console.log('Age changed') } );
obj.age++;
obj.on('nameChage', function(){ console.log('Name changed') })
obj.name = 'Mary';
obj.trigger('ageChange');
obj.trigger('nameChange');
console.log(obj);
