// arrow function - ()=>{}

function functionName() {
    console.log('cos', this)
}
const fnName = () => {
    console.log('cos2', this)
}
// fnName()

// curring - ()=>()=>{}
function add(a) {
    return function (b) {
        return a + b
    }
}
// const add = (a) => (b) => (a + b)
// const five = add(2)(3)
// console.log('five', five)
// class / constuctor / method / property

// object oriented programming 
// functional programming - programowanie funkcyjne 

class Counter {
    constructor(props) {
        // super(props)

        // properies
        this.startFrom = 0
        this.endOn = 10

        this.actualValue = 0

        // .bind używamy jeśli chcemy aby "this" w funkcji add było Counterem, a nie Nodem
        this.add = this.add.bind(this)
        // .bind przypina metodę do kontekstu klasy
    }
    add(a) {
        this.actualValue += a
        // methods
    }
}


// const counter = new Counter()
// // console.log(counter)
// console.log(counter.actualValue)
// counter.add(4)
// console.log(counter.actualValue)
// counter.add(2)
// console.log(counter.actualValue)
// counter.add(10)
// console.log(counter.actualValue)





// event handler - onclick, onchange, onkeydown
// deconstructing objects / arrays = {...a, b, ...c}, [...a,...b]

// const obj = {
//     'a':0,
//     'b':1,
//     'key':0,
//     'key1':3
// }

// const { a, b, ...rest } = obj

// console.log(a, b)
// console.log(rest)

// const arr = [0,1,2,3]

// const [a,b,...rest] = arr

// console.log(a,b)
// console.log(rest)



// callbacks / promises

// function callback() {
//     console.log('callback')
// }
// function callback1() {
//     console.log('callback1')
//     callback()
// }
// function callback2() {
//     console.log('callback2')
//     callback1()
// }
// function callback3() {
//     console.log('callback3')
//     callback2()
// }
// callback3()


const resolve = ()=>{
    console.log('success')
}
const reject = ()=>{
    console.log('error')
}

const timer = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(false){
            resolve(true)
        }
        else{
            reject(false)
        }
    },5000)
})

timer.then((data)=>{
    console.log('wykonało się z success', data)
}).catch((err)=>{
    console.log('wykonało się z error', err)
})



// ajax / fetch
// import / export / modules