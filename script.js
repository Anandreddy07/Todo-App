localStorage.getItem


let addbtn=document.getElementById('add_btn')

addbtn.addEventListener('click',addtext)

function addtext(e){
 // adding event to button 
 let currentinput=document.getElementById('input')
 let currenttext= currentinput.value

 if(!currenttext){
    alert("please fill out the task..!");

 }
 else{
    alert("success");
    //adding text in to todo list
    let newli=document.createElement('li')
    newli.className=("list-group-item d-flex justify-content-between")
    newli.innerHTML=`<h3 class="flex-grow-1">${currenttext}</h3>
            <button class=" btn btn-warning mx-2 " onclick="edit(this)"  >Edit</button>
            <button class="btn btn-danger " onclick="removetext(this)" >Remove</button>`

    // for adding new tsk list 
    let list=document.getElementById('list');
    list.appendChild(newli);
    
    // for clearing field after submit
    currentinput.value=' ';  
    return;
     }


}

 // removing text from todo list
function removetext(element){
    element.parentElement.remove()

}

//editing text 
function edit(element){
 if(element.textContent=='Done'){
 element.textContent='Edit'
 let currenttextname= element.previousElementSibling.value
 let heading =document.createElement('h3');
 heading.className="flex-grow-1"
 heading.textContent =currenttextname
 element.parentElement.replaceChild(heading, element.previousElementSibling)


 }
 else{
 element.textContent='Done'
 let currenttextname= element.previousElementSibling.textContent
 let textinput=document.createElement('input');
 textinput.type='text'
 textinput.className='form-control'
 textinput.value=currenttextname

 element.parentElement.replaceChild(textinput, element.previousElementSibling)


 }
}
