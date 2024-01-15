const camera = {
  statusCode: 200,
  body: {
    code: "10000",
    message: "Success",
    data: [
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK",
        LastActivityTime: "2020-10-02 14:12:16+0900",
        Tags: ["consectetur", "Dolor Sit", "Vestibulum", "Office"],
        CameraType: "rtsp",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/06.png",
      },
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK0",
        LastActivityTime: "2020-10-01 20:12:16+0900",
        Tags: ["consectetur", "Dolor Sit", "Vestibulum"],
        CameraType: "rtmp",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/03.png",
      },
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK1",
        LastActivityTime: "2020-09-01 21:12:16+0900",
        Tags: ["consectetur", "Vestibulum"],
        CameraType: "usb",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/01.png",
      },
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK2",
        LastActivityTime: "2020-09-30 22:12:10+0900",
        Tags: ["consectetur"],
        CameraType: "rtsp",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/02.png",
      },
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK4",
        LastActivityTime: "2020-09-30 20:12:16+0900",
        Tags: ["consectetur", "Vestibulum"],
        CameraType: "usb",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/04.png",
      },
      {
        DeviceID: "DEB-NUC8i3BE-G6BE01300NXK5",
        LastActivityTime: "2020-09-29 18:12:16+0900",
        Tags: ["consectetur", "Vestibulum"],
        CameraType: "usb",
        UserID: "ap-northeast-1:750d5320-5447-4fc7-b211-397d3f952650",
        SnapshotSignedUrl:
          "https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/05.png",
      },
    ],
  },
};


//CameraType.UserID.DeviceID.CameraType.SnapshotSignedUrl.LastActivityTime
//map,sort,filter


const mydata=camera.body.data;
// const result=mydata.map((item)=>item.SnapshotSignedUrl) 
// const result=mydata.filter((item)=>item.CameraType=="usb")  
// const result=mydata.filter((item)=>item.UserID.includes("ap-northeast-1"))
// console.log(result)                        
// console.log(result[5])          //index[]                    



// const result=mydata.sort((acc,cur)=>acc.LastActivityTime>cur.LastActivityTime?1:-1)
// console.log(result)

// let result=mydata[0].Tags
// console.log(result)

// let result=mydata[0].Tags.sort((acc,cur)=>acc.toLowerCase>cur.toLowerCase?1:-1)


// let result=mydata[0].Tags.filter(item=>item==="Office")
let result=mydata[0].Tags.filter(item=>item.length>6 && item.length<10)
console.log(result)