angular.module('app.services')

.factory('Tasks', function($firebase) {

  // var tasks = [
  //   { id: 0, body: 'Get some cheese', completed: false },
  //   { id: 1, body: 'Eat the cheese', completed: true },
  //   { id: 2, body: 'Get some more cheese', completed: false },
  //   { id: 3, body: 'Time to go home', completed: false }
  // ];

  var url = 'https://cordova-seed.firebaseio.com/',
      fireRef = new Firebase(url),
      tasks = $firebase(fireRef);

  return {
    all: function() {
      return tasks;
    },
    get: function(taskId) {
      return tasks[taskId];
    },
    add: function(task) {
      //tasks.unshift(task);
      tasks.$add(task);
    },
    remove: function(id) {
      tasks.$remove(id);
    }
  };
});
