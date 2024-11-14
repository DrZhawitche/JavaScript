
function generateRandomName(firstNames, lastNames) {
  let firstName = firstNames[Math.floor((Math.random() * firstNames.length))]
  let lastName = lastNames[Math.floor((Math.random() * lastNames.length))]
  if(`${firstName} ${lastName}` === 'Nabih Berri') {
    return `My Hero`
  } else {
    return `${firstName} ${lastName}`
  }

}

const firstNames = [
  'Muhammad',
  'Mostafa',
  'Mohsen',
  'Ali',
  'Mahmoud',
  'Nabih',
  'Sara',
  'Rayhana'

];

const lastNames = [
  'Chawiche',
  'Yaghi',
  'Jaafari',
  'Hayek',
  'Diab',
  'Berri',
];

for(let i = 0; i <= 100; i++){
  console.log(`${i}.${generateRandomName(firstNames, lastNames)}`)

}