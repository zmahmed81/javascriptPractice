// rest operator
// function greet(){
//     return"good morning"
// }
// console.log(greet())

// function greet(str1){
//     return"hello "+str1
// }
// console.log(greet("amjad sir"))

// function add(num1,num2,num3){
//     return num1+num2+num3
// }
//                                    it is only for given nums
// console.log(add(10,20,30))

// function add(...nums){
//   const result=nums.reduce((acc,cur)=>acc+cur)      
//                                                   rest operator
//   return result
// }
// console.log(add(89,88,66,77))
// function mul(...nums){
//     const result=nums.reduce((acc,cur)=>acc*cur)
//     return result
//   }
//   console.log(mul(2,4,5,6,3))


// spread operator

// const city=["hyderabad","haryana","hubli"]
// console.log(city[0])
// console.log(city.length)
// city.push("himachal pardesh")        o/p   ["hyderabad","haryana","hubli","himachal pardesh"]
// city.unshift("himachal pardesh")        o/p   ["himachal pardesh","hyderabad","haryana","hubli"]
// city.splice(1,1,"goa")        o/p   ["hyderabad","goa","hubli"]
// city.splice(1,0,"goa")        o/p   ["hyderabad","goa","haryana","hubli"]


// const ncity=["goa",...city]
// const ncity=[...city,"goa"]
// console.log(ncity)


const students=["raj","sam","reema"]
const nstudents=students            
            // shallow copy     o/p  ["raj","raheem","sam","reema"] directassign happen here
// const nstudents=[...students]            
                // deep copy   o/p  ["raj","raheem","sam","reema"]
const nstudent=[students]
nstudents[1]="raheem"
console.log(nstudents)
console.log(students)



// const person={
//     name:"raj",
//     age:20,
//     city:"pune"
// }
// // const nperson=person
// const nperson={...person,bloodgroup:"B+ve"}
// nperson.age=25
// console.log(person)
// console.log(nperson)



















