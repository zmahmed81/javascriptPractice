const students=[{name:"Raj",age:20,city:"Nanded"},
{name:"Ram",age:21,city:"Hingoli"},
{name:"Ravi",age:19,city:"Pune"},
{name:"Rahul",age:23,city:"Nasik"}]

// students.sort((acc,cur)=>acc<cur?1:-1)
// students.sort((acc,cur)=>acc.age<cur.age?1:-1)
// console.log(students)
// const result=students.map(item=>item.age+5)
// console.log(result)
// const result=students.filter(item=>item.city==="Pune")
// const result=students.map(item=>item.city.toLowerCase())
// console.log(result)


// console.log(students[3].age,students[3].city)
// const result=students.map(item=>item.name)
// const result=students.map(item=>item.age)
// const result=students.map(item=>item.city)
// console.log(result)
// console.log(result.map(item=>item.toUpperCase()))
const filtered=students.filter(item=>item.name==="Ravi")
// console.log(filtered)
console.log(filtered[0].age)
