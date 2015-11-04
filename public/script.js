angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var vm = this

    getHomeworks()
    $interval(function () {
      getHomeworks()
    }, 5000)

    vm.submit = function (input) {
      saveHomework(input)
    }

    vm.toThaiDateTime = function (date) {
      return moment(date).fromNow()
    }

    function getHomeworks () {
      $http.get('/api/iot')
        .then(function success (response) {
          vm.iot = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveHomework (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
  })
