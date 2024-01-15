const products = [
    { title: "Adidas", size: "7", Color: "red"},
     { title: "Adidas", size: "8", Color: "black" },
  { title: "Adidas", size: "9", Color: "blue" },
     { title: "Adidas", size: "7", Color: "yellow" },
     { title: "Reebok", size: "8", Color: "white" },
    { title: "Reebok", size: "8", Color: "Red"},
     { title: "Reebok", size: "9", Color: "Blue" },
      { title: "nike", size: "9", Color: "red" },
     { title: "Flash", size: "7", Color: "blue" },
     { title: "R&B", size: "8", Color: "black" },
     { title: "ads", size: "7", Color: "red" },
    ]
    // const result=products.filter((item)=>item.title==="Adidas")
    // const result=products.filter((item)=>item.title==="Adidas" && item.size==7)
    // const result=products.filter((item)=>item.title==="Adidas" && item.size==7 && item.Color=="red")
    // console.log(result)

   //  const result=products.sort((acc,cur)=>acc.size<cur.size?1:-1)
   //  console.log(result)


    const result=products.reduce((acc,cur)=>acc.title>cur.title?acc:cur)
    console.log(result)