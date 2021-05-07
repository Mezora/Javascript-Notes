const persona = {
    name: 'Kalos',
    age: 16
}
if (persona.age < 21) {
    throw new Error('El usuario es menor a 21 años.') // El usuario es menor a 21 años.
} else {
    console.log('El usuario puede tomar bebidas alcohólicas.'); // El usuario puede tomar bebidas alcohólicas.
}