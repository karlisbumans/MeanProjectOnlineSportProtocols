/**
 * Created by KarlisBumans on 02.05.2016.
 */

LSIS.service('userService', ['$resource','$http', '$location',function($resource,$http, $location) {
    this.userData={};
    this.currentUserID=null;
    this.setUserData = function(data) {
        this.userData = data;
    }
    this.getUserData = function () {
        return this.userData;
    }

    this.createUser = function(lietotajs) {
        $http.post('http://localhost:8080/api/user/adduser', lietotajs).then(function successCallback(response) {
           alert("Lietotājs veiksmīgi pievienots");
        }, function errorCallback(response) {
            alert("Kļūda, lietotājs nav pievienots");
        });
    };

    this.updateUser = function(lietotajs) {
        $http.put('http://localhost:8080/api/user/' + lietotajs._id, lietotajs).then(function successCallback(response) {
           alert("Lietotājs veiksmīgi labots");
        }, function errorCallback(response) {
            alert("Kļūda, lietotājs nav labots");
        });
    };

    this.deleteUser = function(userid) {
        //console.log('No servisa deleteUser id=' + userid);
        $http.delete('http://localhost:8080/api/user/'+userid).then(function successCallback(response) {
            alert("Lietotājs veiksmīgi izdzēsts");
        }, function errorCallback(response) {
            alert("Kļūda, lietotājs nav izdzēsts");
        });
    };

    this.isUserLoggedIn = function(){
        //return true; //TODO: novakt so
        if (this.currentUserID) {
            console.log('TRUE');
            return true;
        }
        else {
            console.log('FALSE');
            return false;
        }
    };

    this.checkUserRights = function(){
        if (! this.isUserLoggedIn()) {
            $location.path("/noRightsPage" );
        }
    };



    
}]);