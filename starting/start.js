const fs = require("fs")


const qt1 = "this is start"
// fs.writeFile("./file.html", qt1,(err)=>{
//     console.log("file is created")
// })

// for(let i=1;  i<=10; i++){
//     fs.writeFile(`./all-${i}.js`,(err)=>{
//         console.log("created")
//         console.log(err)
//     })
// }

// for (let i = 1; i <= 10; i++){
//     fs.writeFile(`./folder/text-${i}.html`, qt1,(err)=>{
//         console.log(err)
//     })
// }

// this is task
// const qt2 = "this is the task"
// const [, , n] = process.argv
// for(let i=1; i<=n; i++){
//     fs.writeFile(`./task/tasks-${i}.js`, qt2,(err)=>{
//         console.log("task complete")
//     })
// }

// fs.readFile("./folder/text-3.html","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("this is the data : ", data)
//     }
// })
// const qt3 = "\n this is appen file"
// fs.appendFile("./task/tasks-3.js",qt3,(err)=>{
//     console.log("file appended")
// })



// fs.unlink("./task/tasks-7.js",(err)=>{
//     console.log("file deleted")
// })

// fs.readdir("./folder",(err,file)=>{
//     console.log("this is file name: ", file)
// })

// fs.readdir("./task",(err, file)=>{
//     file.forEach((data)=>{
//         fs.unlink(`./task/${data}`,(err)=>{
//             console.log("file is deleted")
//         })
//     })
// })


const qt2 = "this is the task"
const [, , n] = process.argv
for(let i=1; i<=n; i++){
    fs.writeFile(`./task/tasks-${i}.js`, qt2,(err)=>{
        console.log("task complete")
    })
}