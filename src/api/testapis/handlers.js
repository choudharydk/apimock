
export let hello = (request, h) => {
 
  const name = request.query.name ? encodeURIComponent(request.query.name) : 'World';
  return 'Hello, ' + name;
  };
 