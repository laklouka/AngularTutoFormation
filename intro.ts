const nom : String = "abadi"
const test : boolean = true

const addition = (a:number, b:number) : number => {
    return a + b
}


function Override(nom:String) {
    return function(target:any, key:any) {
        Object.defineProperty(target, key, {get : () => nom})
    }
}

class Test {
    @Override("titi")
    nom : any = 'toto'
}


let t = new Test()

console.log(t.nom)