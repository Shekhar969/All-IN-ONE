let Addbtn =document.querySelector("#add")
let form =document.querySelector("#form")
let nameElm = document.querySelector("name")
let emailElm=document.querySelector("email")
let UserDiv =document.querySelector("#userDiv")

document.body.addEventListener("submit", function(e){
    if(e.target.id == add)
    {
        form.classList.toggle("hidden");
        localStorage.setItem("formType" , "addForm")
    }
    if(e.target.id == "submit"){
        e.preventDefault();
        submitform();
        console.log("hello")
    }
})

function submitform(){
    let type=localStorage.getItem("formType");
    let name=nameElm.value;
    let email=emailElm.value;

    if(type== "addForm"){
        let userId=Date.now().toString();
        let user= cerateUserHTML(userId,name,email);
        UserDiv.innerHTML +=user;
    }
}


function cerateUserHTML(id ,name ,email){
    return`
        <div class="user" data-id="${id}">
      <div>
        <p class="user-name">${name}</p>
        <p class="user-email">${email}</p>
      </div>
      <div>
        <p><i class="fa-regular fa-pen-to-square" id="edit"></i></p>
        <p><i class="fa-regular fa-trash-can" id="delete"></i></p>
      </div>
    </div>`
}









