

// define one id toasbox

let toastBox = document.getElementById('toastBox')

// define all messages 
let successMsg = '<i class="fa-solid fa-circle-check"></i> SuccessFully Submited';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i>Please Fix The Error';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input Check Again';



// create one function showtoast
function showtoast(msg) {
    // created one element div
    let toast = document.createElement("div");
    // added one class name for that div toast
    toast.classList.add('toast');

    toast.innerHTML = msg;
    // added that toast into the toastBox
    toastBox.appendChild(toast);

    // if msg includes error
    if (msg.includes('Error')) {
        // show the error
        toast.classList.add('error')
    }
    // if msg includes invalid
    if (msg.includes('Invalid')) {
        // show invalid
        toast.classList.add('Invalid')
    }

    // added settime out function for the all toast
    setTimeout(() => {
        toast.remove();
    }, 6000);
}