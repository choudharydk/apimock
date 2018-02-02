import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

let routes = [];
// routes.push(testRoutes);
// routes.push(prodRoutes);

routes = routes.concat(testRoutes);
routes = routes.concat(prodRoutes);

export default routes;