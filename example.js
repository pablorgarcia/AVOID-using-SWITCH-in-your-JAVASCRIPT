const adversario = 'Magneto'

// Primer caso a evitar
let loki = ''
if (adversario === 'Iron-Man') {
  loki = 'Magneto'
} else if (adversario === 'Hulk') {
  loki = 'Thanos'
} else if (adversario === 'Thor') {
  loki = 'Odin'
} else {
  loki = 'Loki'
}

// Segundo caso a evitar
let loki = ''
switch (adversario) {
  case 'Iron-Man':
    loki = 'Magneto'
    break

  case 'Hulk':
    loki = 'Thanos'
    break
  
  case 'Thor':
    loki = 'Odin'
    break

  default:
    loki = 'Loki'
}


/*
  Solución
*/
const LOKI_DISFRACES = {
  'Iron-Man': 'Magneto',
  Thor: 'Odin',
  Hulk: 'Thanos',
  // Lobezno: () => 'Magneto' TAMBIÉN PODEMOS EJECUTAR MÉTODOS
}
const LOKI_DEFAULT_DISFRAZ = 'Loki'

const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ
// const loki = LOKI_DISFRACES[adversario] ? LOKI_DISFRACES[adversario]() : LOKI_DEFAULT_DISFRAZ

console.log(loki)