function test() {
    console.log("test")
}

const test = function() {
    console.log("test")
}


//Arrow function => fonction sans context
const test = () => {
    console.log("test")
}

//Template string

const nom = "abadi"
const prenom = "ihab"
// const nomComplet = nom + " "+prenom
const nomComplet = `${nom} ${prenom}`

//avant ES6+
var nom = ""

//Après ES6+
//variable muable => const
//Variable mutable => let
//Opérateur spread et rest
const obj1 = {nom : 'abadi', prenom : 'ihab'}
const obj2 = {...obj1, age : 33}
const tab1 = ['toto', 'tata']
const tab2 = [...tab1,'titi']

const functionMultiArgs = (...args) => {
    console.log(args)
}
functionMultiArgs(1,3, 4)

//Destructuration des objets
const obj = {key1: 'val1', key2: 'val2', key3: 'val3'}
// const key1 = obj.key1
const {key1, key2} = obj
console.log(key1)

export const fonction1 = () => {
    console.log("fonction 1")
}