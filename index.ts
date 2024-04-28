function Decorator(){
    return function(target, key, descriptor){ //descriptor equivale a propria função q foi decorada, no caso a calculate
         descriptor.value = function(value: number){
            console.log('Calculando ', value, ' ao quadrado')
            return value ** 2
         }
    }
}

class Planet{
    name:string

    constructor(name:string){
        this.name = name
    }

    @Decorator()
    calculate(value:number){
        console.log('Calculando ', value, ' vezes 2')
        return value * 2
    }
}

const planet = new Planet('terra')

const result = planet.calculate(4)

console.log('resultado igual a ', result)