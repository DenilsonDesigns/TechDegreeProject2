//storing in variable all the student details on page.
const studentDeets = document.getElementsByClassName('student-item'); // previously 'student-item cf'

appendPageLinks(studentDeets);


function activePage(page){
    let allButtons= document.getElementsByTagName('a');
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].addEventListener('click', (e)=>{
            e.target.className= "";
        });
        allButtons(page).className= "active";
    } 
}

document.querySelector('.pagination ul').addEventListener('click', (e)=>{
    if (e.target.tagName=== "A"){
        let pageNum = (e.target.textContent) -1;
        showPage(pageNum, studentDeets);
        activePage(pageNum);
    }
});




function showPage(pageNumber, studentDetails) {
    for(let i=0; i<studentDetails.length; i++ ){
        studentDetails[i].style.display= 'none';
        }
       
    let counter= pageNumber*10;
    for(counter; (counter)< ((pageNumber*10)+10); counter++){
        studentDetails[counter].style.display= 'block';
        }
    }
   
 
  
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

    // "for" every page
    for(let i=1; i<= noOfButtons; i++){
        //create li
        const li= document.createElement('li');
        //append li to ul
        ul.appendChild(li);
        //add <a> with page number as textContent
        const a= document.createElement('a');
        li.appendChild(a);
        a.innerText= i;
    }
}   



