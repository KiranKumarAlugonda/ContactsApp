//creating a resource as a factory to get data from the db through the restful api
angular.module('ContactsApp')
   //this helps us to uodate the database 
   .factory('Contact',function($resource){
     return  $resource('/api/contact/:id',{id:'@id'},{
        'update' : {method: 'PUT'}  
     });

});