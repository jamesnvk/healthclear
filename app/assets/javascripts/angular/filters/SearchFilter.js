app.filter('searchFor', function(){
    return function(arr, queryTerm){
        if(!queryTerm){
            return arr
        }
        var result = []
        queryTerm = queryTerm.toLowerCase()
        angular.forEach(arr, function(provider){
            if(provider.name.toLowerCase().indexOf(queryTerm) !== -1){
            result.push(provider)
        }
        })
        return result
    }
})