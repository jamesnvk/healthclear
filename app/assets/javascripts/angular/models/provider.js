app.factory('Provider', function ($resource) {
  var Provider = $resource('http://localhost:3000/api/v1/providers/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Provider;
};