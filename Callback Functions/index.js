/*
Nested functions
 */
function process()
{
    console.log("Entrire Process is divided into sub processes");
    //sub process 1
    function subprocess1()
    { console.log("subprocess 1");}
    //sub process 2
    function subprocess2()
    { console.log("subprocess 2");}
    //sub process 3
    function subprocess3()
    {console.log("subprocess 3"); }
    //returning definition of subprocess1
    return subprocess1;
}
const result = process();
console.log(result);


/*
passing functions as arguments
*/
function addUser(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshUserList() {
    alert('Hello World');
}
addUser(1, refreshUserList);


/*
Nesting functions with callback
*/
function addPersonProcess()
{
    function showAlert()
    {
        //this will call add person with a callback of refreshPersonList
        addPerson(1,refreshPersonList);
    }
    function addPerson(id, refreshCallback) {
        refreshCallback();
        // You can also pass arguments if you need to
        // refreshCallback(id);
    }
    
    function refreshPersonList() {
        alert('Person List');}
        //Return definition of showalert function
   return showAlert();
}
addPersonProcess();
