const users=[
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {}
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    },
    {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
    "lat": "29.4572",
    "lng": "-164.2990"
    }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
    }
    },
    {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
    }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
    }
    }]
//    const nd=users.filter(item=>item.username==="Samantha")
//     console.log(nd)
    // const nd1=users[2].username
    // console.log(nd1)

    // const result=users.map(item=>item.username)
    // console.log(result)
    // const result=users.map(item=>item.address.city)
    // const result=users[4].address.geo.lng
    // const result=users[4].address.geo. 
    // console.log(result)


    // const values=Object.keys(users[0])
    // console.log(values)



    // const username=users.filter(item=>item.username.startsWith("S"))
    // const username=users.filter(item=>item.name.length>12)
    // const username=users.filter(item=>item.name.includes("sey"))
    // const username=users.filter(item=>item.address.city.length>12)
    // const username=users.filter(item=>item.address.zipcode.includes("-"))
    // const username=users.filter(item=>!item.address.zipcode.includes("-"))
    // console.log(username[0].address.zipcode)

    // const lng=users.filter(item=>item.address.geo.lng<80 && item.address.geo.lng>30)
    // const lng=users.filter(item=>item.address.geo.lng<0)
    // console.log(lng.length)
    // console.log(lng[0].address.geo.lng)

//    const result=users.sort((acc,cur)=>acc.username>cur.username?1:-1)
//    console.log(result)


  const values=Object.keys(users[0])
  const values1=Object.keys(users[0].address)
  const values2=Object.keys(users[0].address.geo)
    // console.log(values)
    // console.log(values1)
    // console.log(values2)
    console.log(...values,...values1,...values2)


