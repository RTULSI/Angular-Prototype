(function(){
	var app = angular.module("myApp",[]);

	var MainController = function($scope){
		$scope.message = "Sample Application";
		$scope.studentName = "",
		$scope.studentDegree = "",
		$scope.studentMarks = "",
		$scope.studentDetails = function(){
				return $scope.studentName + " " + $scope.studentDegree + " " + $scope.studentMarks;
			},
			
			$scope.students = [];
			$scope.getStudentsDetails = function(){
				// $scope.students.push({'StudentDetails':$scope.studentDetails()});
					$scope.students = [];
					angular.forEach($scope.degree,function(value,key){
						if(value.DegreeName == $scope.selectedDegree){
							$scope.students.push({'StudentName':value.StudentName,'DegreeName':value.DegreeName,'StudentMarks':value.StudentMarks});
						};
					});
			}

			$scope.degree = [];
			$scope.addStudentsData = function(){
				$scope.degree.push({'StudentName':$scope.studentName,'DegreeName':$scope.studentDegree,'StudentMarks':$scope.studentMarks});
				$scope.studentName = '';
				$scope.studentDegree = '';
				$scope.studentMarks = '';
			};
	};

	app.filter("Grade",function(){
		return function(input){
			var result = "";
			if(input >=95){
				result = "A";
			}
			else if(input>=60){
				result = "B";
			}
			else{
				result = "C";
			}

			return result;
		};
	})

	app.controller("MainController",MainController);
}());