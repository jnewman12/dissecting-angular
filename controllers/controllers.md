# Angular Controllers
- Controllers is a javascript constructor function that is used to augment the angular scope
- When you prefix your DOM (divs, body, etc) angular will instantiate a new controller object
- When all this happens a new child scope is available as an injectable parameter to the controllers constructor function as $scope.

- Controllers are used to
  - set up the initial state of the $scope object
  - add behavior to the $scope object
  - add functions to $scope that contain business logic to enhance view behavior

- Do not use controllers to;
  - Manipulate the DOM (they should only be used for business logic)
  - From input (use angular form controls)
  - Filter output (user angular filters)
  - Share code or state across controllers (use angular services instead)
  - Manage the life-cycle of other components


- Presentation logic (i.e. the way things are rendered and displayed) should remain within views and directives.
    