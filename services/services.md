# Services

Angular services are substitutable objects that are wired together using dependency injection. Services are used to organize and share code across an angular app. 

Angular services are;
  - Lazily instantiated. Angular will only instantiate a service when an application component depends on it. 
  - Singletons. Each component dependent on a service gets a reference to the single instance generate by the service factory. 

Angular itself offers serveral services (like $http), but it's better to create your own. 

  