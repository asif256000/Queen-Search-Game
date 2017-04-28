/**
 * Created by arnab on 26/4/17.
 */
/**
 * Created by arnab on 26/9/16.
 */

angular.module('myApp')

    .service('mainService',["$http",function($http){

        this.planets=function () {
            return $http({

                url: 'https://findfalcone.herokuapp.com/planets',
                method:"GET"
            })
        };

        this.spaceShips=function () {

            return $http({

                url: 'https://findfalcone.herokuapp.com/vehicles',
                method:"GET"
            })

        }

        this.token=function () {

            var data={};
            return $http({

                url: 'https://findfalcone.herokuapp.com/token',
                method:"POST",
                data:data
            })

        }

    }]);