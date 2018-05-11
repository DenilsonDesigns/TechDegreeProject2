//storing in variable all the student details on page.
const studentDeets = document.getElementsByClassName('student-item');
//selecting button a tags
let allButtons= document.getElementsByTagName('A'); 

//loading buttons
appendPageLinks(studentDeets);
//showing first page of results
showPage(0, studentDeets);
//assigning first button as active
allButtons[0].className=  "active"; 

//listening for clicks on page buttons, target gets active status
document.querySelector('.pagination ul').addEventListener('click', (e)=>{
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].className= "";
        };
    if (e.target.tagName=== "A"){
        let pageNum = (e.target.textContent) -1;
        showPage(pageNum, studentDeets);
        e.target.className= "active";
    }
});


//function to build list of 10 students per page
function showPage(pageNumber, studentDetails) {
    //hiding all students
    for(let i=0; i<studentDetails.length; i++ ){
        studentDetails[i].style.display= 'none';
        }
    //building list of 10 students based on page number
    let counter= pageNumber*10;
    for(counter; (counter)< ((pageNumber*10)+10); counter++){
            if (counter<studentDetails.length){
            studentDetails[counter].style.display= 'block';
            }
        }
    }
   
 
  //appending links to bottom of page
function appendPageLinks(studentList) {
    // determine how many pages for this student list
    const noOfButtons= Math.ceil(studentList.length/10);

    // create a page link section
    const paginDiv= document.createElement('div');
    paginDiv.className= 'pagination';
    const mainDiv= document.querySelector('div.page');
    mainDiv.appendChild(paginDiv);
    const ul= document.createElement('ul');
    paginDiv.appendChild(ul);

    // based on no of buttons required, adding that number of buttons. 
    for(let i=1; i<= noOfButtons; i++){
        const li= document.createElement('li');
        ul.appendChild(li);
        const a= document.createElement('a');
        li.appendChild(a);
        a.href= "#";
        a.innerText= i;
    }
}   



