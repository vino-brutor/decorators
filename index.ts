// function Decorator(){
//     return function(target, key, descriptor){ 
//          descriptor.value = function(value: number){
//             console.log('Calculando ', value, ' ao quadrado')
//             return value ** 2
//          }
//     }
// }


function Log(){
    return function(target, key, descriptor){ //descriptor equivale a propria função q foi decorada, no caso a calculate
        const originalMethod = descriptor.value //o key guarda o nome do método/função original

        descriptor.value = function(...args: any[]){
            console.log('.....................................')
            console.log(`Chamando o método ${key} com os parâmetros ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this, args)

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
            console.log('.....................................')

            return result
        }
    }
}
class Planet{
    name:string

    constructor(name:string){
        this.name = name
    }

    @Log()
    calculate(value:number){
        console.log('Calculando ', value, ' vezes 2')
        return value * 2
    }

    @Log()
    InvertName(){
        return this.name.split('').reverse().join('')
    }
}

const planet = new Planet('terra')

const result = planet.calculate(4)


console.log('resultado igual a ', result)

planet.InvertName()