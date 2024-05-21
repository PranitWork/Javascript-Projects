function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "techshorts01@gmail.com",
        Password: "6D88500A12545E642982A44792FA5DFD09CD",
        To: 'daphalepranit53@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New contact form",
        Body: "name: " + document.getElementById('name').value + "<br> email: " + document.getElementById('email').value + "<br> phone no: " + document.getElementById('phone').value + "<br> message: " + document.getElementById('message')
    }).then(
        message => alert("message send sucessfully")
    );
}
