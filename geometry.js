/*var stdFaces = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, 0, -1),
  new THREE.Vector3(0, 0, 1)
];*/
var stdFaces = [
  {x: -1, y: 0, z: 0},
  {x: 1, y: 0, z: 0},
  {x: 0, y: -1, z: 0},
  {x: 0, y: 1, z: 0},
  {x: 0, y: 0, z: -1},
  {x: 0, y: 0, z: 1}
];

/*
  1----36
  |   / |
  | /   |
  24----5
*/

var stdVerts = [
  [
    -0.5, 0.5, -0.5,
    -0.5, -0.5, -0.5,
    -0.5, 0.5, 0.5,
    
    -0.5, -0.5, -0.5,
    -0.5, -0.5, 0.5,
    -0.5, 0.5, 0.5
  ],
  [
    0.5, 0.5, 0.5,
    0.5, -0.5, 0.5,
    0.5, 0.5, -0.5,
    
    0.5, -0.5, 0.5,
    0.5, -0.5, -0.5,
    0.5, 0.5, -0.5
  ],
  [
    0.5, -0.5, 0.5,
    -0.5, -0.5, 0.5,
    0.5, -0.5, -0.5,
    
    -0.5, -0.5, 0.5,
    -0.5, -0.5, -0.5,
    0.5, -0.5, -0.5
  ],
  [
    0.5, 0.5, -0.5,
    -0.5, 0.5, -0.5,
    0.5, 0.5, 0.5,
    
    -0.5, 0.5, -0.5,
    -0.5, 0.5, 0.5,
    0.5, 0.5, 0.5
  ],
  [
    0.5, 0.5, -0.5,
    0.5, -0.5, -0.5,
    -0.5, 0.5, -0.5,
    
    0.5, -0.5, -0.5,
    -0.5, -0.5, -0.5,
    -0.5, 0.5, -0.5
  ],
  [
    -0.5, 0.5, 0.5,
    -0.5, -0.5, 0.5,
    0.5, 0.5, 0.5,
    
    -0.5, -0.5, 0.5,
    0.5, -0.5, 0.5,
    0.5, 0.5, 0.5
  ]
];

var stdUVs = [
  0.0, 1.0,
  0.0, 0.0,
  1.0, 1.0,
  
  0.0, 0.0,
  1.0, 0.0,
  1.0, 1.0
];
