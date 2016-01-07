var app = angular.module("validation", []);

app.controller("registration", function($scope,$window, $http){
  
  $scope.ans = [];
  $scope.reset= function(){
      $scope.email="";
      
  };
  
  $scope.Submit=function(){
    //alert($scope.email);
       
        $http.get('http://localhost:5000/feed?email='+ $scope.email)
        .success(function(response, status){
            if(response.members) {
                 $window.location.href='http://localhost:8008/html/rsproject.html';
            } else {
                window.alert('Entered Email in not found');
            }
        })
        .error(function(data, status){
            window.alert('error');
        });
       
  };
  $scope.answerList = {
    feedback: []
  };

  $scope.okay = function(empId, question, answerId) {
      question.answerId = answerId;
  };
  
   $scope.ok=function(){
       //alert("Thank you for your feedback" + JSON.stringify($scope.questions));
       $window.location.href='http://localhost:8008/html/selfEval.html';
       //$window.location.href='http://localhost:8008/index.html';
     }
       
  
});

