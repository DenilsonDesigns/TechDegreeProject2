//storing in variable all the student details on page.
const studentDeets = document.getElementsByClassName('student-item cf');
//obtaining number of pages needed based on studentDeets length.
const noOfButtons= Math.ceil(studentDeets.length/10);

//create pagination div
const $pagination = $('<div class="pagination"><ul></ul></div>');
//append to webpage
$('.page').append($pagination);

//add buttons to $pagination
const $button = $('<li><a class="active" href="#">1</a></li>');
$('.pagination').append($button);





console.log();


// This ​function ​builds ​a ​list ​of ​ten ​students ​and ​displays ​it ​on ​the ​page. ​The ​students ​displayed
// depends ​on ​the ​page ​number ​passed ​to ​this ​function. ​The ​function ​should ​loop ​through ​all ​the
// students ​in ​the ​list ​and ​determine ​if ​each ​student ​is ​on ​this ​page. ​It ​will ​show ​all ​the ​students ​on
// this ​page ​and ​hide ​the ​rest. ​Here ​are ​some ​ideas ​for ​how ​this ​could ​work ​in ​code:


function showPage(/* arguments for page number and student list */) {
    // first hide all students on the page
    for(let i=0; i<studentDeets.length; i++ ){
        studentDeets[i].style.display= 'none';
    }
    // then loop through all students in our student list argument

    // if student should be on this page number
    // show the student
    
    }






    // This ​function ​creates ​all ​the ​page ​links ​based ​on ​a ​list ​of ​students. ​It ​will ​determine ​how ​many
    // pages ​we ​need ​based ​on ​the ​list's ​length, ​create ​a ​list ​of ​links ​for ​each ​page, ​and ​append ​that
    // list ​to ​the ​page. ​When ​each ​link ​is ​clicked, ​we'll ​use ​the ​showPage ​function ​to ​display ​the
    // corresponding ​page, ​and ​mark ​the ​active ​link. ​For ​example, ​clicking ​the ​link ​to ​page ​2 ​will ​tell
    // the ​showPage ​function ​to ​display ​students ​11 ​through ​20.

function appendPageLinks(/* take a student list as an argument */) {
    // determine how many pages for this student list

    // create a page link section

    // "for" every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link (event listener)
    // Use showPage to display the page for the link clicked
    // mark that link as "active"
    
    }   