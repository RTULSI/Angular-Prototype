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
			
		
			// $scope.students = [];
			// $scope.addStudentsData = function(){
			// 	$scope.students.push({'StudentDetails':$scope.student.studentDetails()});
			// 	$scope.student.studentName = '';
			// 	$scope.student.studentDegree = '';
			// 	$scope.student.studentMarks = '';
			// }

			$scope.students = [];
			$scope.getStudentsDetails = function(){
					$scope.students.push({'StudentDetails':$scope.studentDetails()});
				// 	angular.forEach($scope.studentDegree,function(value,key){
				// 	$scope.students.push({'StudentDetails':$scope.studentDetails()});
				// 	$scope.studentName = '';
				// 	$scope.studentDegree = '';
				// 	$scope.studentMarks = '';
				// });
			}

			$scope.degree = [];
			$scope.addStudentsData = function(){
				$scope.degree.push({'StudentName':$scope.studentName,'DegreeName':$scope.studentDegree,'StudentMarks':$scope.studentMarks});
				$scope.studentName = '';
				$scope.studentDegree = '';
				$scope.studentMarks = '';
			};


			// $scope.selectedStudent = [];
			// 	angular.forEach($scope.students,function(value,key){
			// 		if(value.student.studentDegree == $scope.selectedDegree){
			// 			$scope.selectedstudent.push({'Name':value.student.studentName})
			// 		}
			// 	});

		// $scope.degree = [];
		// $scope.studentName = []; 
		// $scope.addData = function(){
		// 	$scope.degree.push({'Name':$scope.newDegree});
		// 	$scope.newDegree = '';
		// 	$scope.studentName.push({'StudentName':$scope.newStudent});
		// 	$scope.newStudent = '';
		// };
		
		// $scope.studentName.push({'StudentName':$scope.newStudent,'DegreeName':$scope.newDegree});
		// $scope.loadData = function(){
		// 	$scope.selectedstudent = [];
		// 	angular.forEach($scope.studentName,function(value,key){
		// 		if(value.DegreeName == $scope.selectedDegree){
		// 			$scope.selectedstudent.push({'Name':value.StudentName});
		// 		}
		// 	})
		// }
	};

	app.controller("MainController",MainController);
}());