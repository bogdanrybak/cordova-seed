angular.module('app.controllers')

.controller('DashboardCtrl', function($scope, Tasks) {
    $scope.formData = {
        newTaskBody: ''
    };

    $scope.tasks = Tasks.all();

    $scope.addTask = function(taskBody) {
        Tasks.add({
            body: taskBody,
            complete: false
        });

        $scope.formData.newTaskBody = '';
    };

    $scope.removeTask = function(id) {
        Tasks.remove(id);
    }
});
