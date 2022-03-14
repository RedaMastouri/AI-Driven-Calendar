//add button
const addBtn = document.querySelector('button');
//the row where cards will be appended
const taskDiv = document.querySelectorAll('div.row')[3];
//Retrieve from Local Storage 
taskDiv.innerHTML = localStorage.getItem('tasks');
//task description input element
const taskDescription = document.querySelector('#task');
//assignee name input element 
const assigneeName = document.querySelector('#assigneeName');
//assignee emal input element
const assigneEmail = document.querySelector('#assigneeEmail');
//due date input element
const dueDate = document.querySelector('#dueDate');

//Click listener for add button
addBtn.addEventListener('click', () => {
    //Create a new div
    let div = document.createElement('div');
    //Add class to div
    div.className = 'col-12 col-sm-4 mt-1';
    //Create a div for bootstrap card
    let card = document.createElement('div');
    //Add card class
    card.className = 'card';
    //Create card head
    let cardHead = document.createElement('div');
    //add card header class 
    cardHead.className = 'card-header';
    //create card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //create card footer
    let cardFoot = document.createElement('div');
    cardFoot.className = 'card-footer';
    //Append the card components to the card div
    card.appendChild(cardHead);
    card.appendChild(cardBody);
    card.appendChild(cardFoot);
    //Create h2 Element for assignee name display
    let name = document.createElement('h2');
    //get value from name input field
    name.className = 'name';
    //due date element
    let datee = document.createElement('h3');
    //get value from date input field
    datee = dueDate.value;
    //Set assignee name and date
    name.innerHTML = assigneeName.value + '<small class="text-danger pl-1">Due: ' + datee + '</small>';
    cardHead.appendChild(name);
    //Create element for p which is task description
    let desc = document.createElement('p');
    desc.textContent = taskDescription.value;
    //Append the description to card body element
    cardBody.appendChild(desc);
    //Create a button for card to send email
    let sendBtn = document.createElement('button');
    sendBtn.className = 'btn btn-info';
    sendBtn.textContent = 'Send Mail';
    //Assign the data-email attribute to store the email value
    sendBtn.setAttribute('data-email', assigneEmail.value);
    cardFoot.appendChild(sendBtn);
    div.appendChild(card);
    taskDiv.appendChild(div);
    //store to local storage
    localStorage.setItem('tasks', taskDiv.innerHTML);
});


taskDiv.addEventListener('click', function() {
    if (event.target.tagName == 'BUTTON') {
        let p = event.target.parentElement.parentElement;
        let n = p.firstElementChild.textContent;
        let nm = (n.substr(0, n.indexOf("Due:")));
        let t = p.children[1].firstElementChild.textContent;
        console.log(t);
        var templateParams = {
            email: event.target.getAttribute('data-email'),
            name: nm,
            task: t
        };
        emailjs.send('default_service', 'task', templateParams);
    }
});