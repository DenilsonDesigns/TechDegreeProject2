//storing in variable all the student details on page.
const studentDeets = document.getElementsByClassName('student-item'); // previously 'student-item cf'



// This ​function ​builds ​a ​list ​of ​ten ​students ​and ​displays ​it ​on ​the ​page. ​The ​students ​displayed
// depends ​on ​the ​page ​number ​passed ​to ​this ​function. ​The ​function ​should ​loop ​through ​all ​the
// students ​in ​the ​list ​and ​determine ​if ​each ​student ​is ​on ​this ​page. ​It ​will ​show ​all ​the ​students ​on
// this ​page ​and ​hide ​the ​rest. ​Here ​are ​some ​ideas ​for ​how ​this ​could ​work ​in ​code:


function showPage(pageNumber, studentDetails) {
    // first hide all students on the page
    for(let i=0; i<studentDetails.length; i++ ){
        studentDetails[i].style.display= 'none';
        }
       
    let counter= pageNumber*10;
    for(counter; (counter)< ((pageNumber*10)+10); counter++){
    // then loop through all students in our student list argument
    // if student should be on this page number
    // show the student
        studentDetails[counter].style.display= 'block';
        }
    }

//attempt to get 20-30 to show up.




    // This ​function ​creates ​all ​the ​page ​links ​based ​on ​a ​list ​of ​students. ​It ​will ​determine ​how ​many
    // pages ​we ​need ​based ​on ​the ​list's ​length, ​create ​a ​list ​of ​links ​for ​each ​page, ​and ​append ​that
    // list ​to ​the ​page. ​When ​each ​link ​is ​clicked, ​we'll ​use ​the ​showPage ​function ​to ​display ​the
    // corresponding ​page, ​and ​mark ​the ​active ​link. ​For ​example, ​clicking ​the ​link ​to ​page ​2 ​will ​tell
    // the ​showPage ​function ​to ​display ​students ​11 ​through ​20.

let allButtons= document.getElementsByTagName('a');
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


    // define what happens when you click a link (event listener)


    allButtons.addEventListener('click', (e)=>{
        e.target.className= "active";
    });
    // Use showPage to display the page for the link clicked
    showPage(1, studentDeets);
    // mark that link as "active"
    
}   

appendPageLinks(studentDeets);