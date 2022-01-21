
let userData = [
    {
        name: "Clemcy",
        job: "Porter"
    },

    {
        name: "John",
        job: "Teacher"
    },

    {
        name: "Mercy",
        job: "Painter"
    },

    {
        name: "Lucy",
        job: "Nanny"
    }
]

const infoDiv = document.querySelector('.info-div')

let details = userData.map((user)=>{
    return `<div>Employee's name is ${user.name} and works as a ${user.job}</div>`
})
// console.log(details)

infoDiv.innerHTML = details.join("")   //.join - Removes the comma



