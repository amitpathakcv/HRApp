/// <reference path="../Models/App.js" />
HrApp.controller('HrCtrl', function ($scope) {
    var dept = [{ Deptid: 1, Name: 'HR', Emp: [{ EmpName: 'Amit' }, { EmpName: 'Ram' }] }, { Deptid: 2, Name: 'IT', Emp: [{ EmpName: 'Ramesh' }, { EmpName: 'Raman' }] }];
    //var emp = [{ Empid: 1, Name: 'Amit' }, { Empid: 2, Name: 'Ram' }];
    var salery = [{ salery: '50k' }, { salery: 'Above 50k' }];
    var Pos = [{ Pos: 'Developer' }, { Pos: 'Manager' }];
    var skills = [{ skill: 'Asp.net' }, { skill: 'C#' }];

    $scope.empdata = dept;
    $scope.Pos = Pos;
    $scope.skills = skills;
    $scope.salery = salery;

    //$scope.checkAll = function () {
    //    if ($scope.dept.Name) {
    //        $scope.dept.Name = true;
    //    } else {
    //        $scope.dept.Name = false;
    //    }
    //    angular.forEach($scope.dept.Emp, function (item) {
    //        item.Selected = $scope.Selected;
    //    });
    //}
});