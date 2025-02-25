const nodemailer = require("nodemailer")

async function sendEmailAdminNewLogin(name, dept, phone, year){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: "its.adityac@gmail.com", // List of recipients
        subject: 'New Student Registration', // Subject line
        html: `<h1>Got a New Student Registration</h1>
        <p>Name: ${name} </p>
        <p>Department:  ${dept} </p>
        <p>Phone:  ${phone} </p>
        <p>Year:  ${year} </p>
        <a href="https://admin-jsub.onrender.com">View Admin</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

async function sendEmailUser(student_email){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: student_email, // List of recipients
        subject: 'Registration Request Accepted', // Subject line
        html: `<h1>Your resgistration request gets accepted by the admin 🎉</h1>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

async function adminNewTextData(name, email, department, phone, title, description){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: student_email, // List of recipients
        subject: 'New Post Request', // Subject line
        html: `<h1>Got a new Post Request From: </h1>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <p><b>Description</b>: ${description}</p>
        <a href="">View Request</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

async function userNewTextData(name, email, department, phone, title, description){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: student_email, // List of recipients
        subject: 'Yout Post Request is under review by the admin', // Subject line
        html: `<h1>You will get notified as it gets accepted!! </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <p><b>Description</b>: ${description}</p>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

async function userNewTextDataRejected(name, email, department, phone, title, description){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: student_email, // List of recipients
        subject: 'Yout Post has been rejected by the admin', // Subject line
        html: `<h1>The post you send has been rejected by the admin </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <p><b>Description</b>: ${description}</p>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

async function userNewTextDataAccepted(name, email, department, phone, title, description){
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: student_email, // List of recipients
        subject: 'Yout Post has been approved by the admin', // Subject line
        html: `<h1>The post you send has been approved by the admin </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <p><b>Description</b>: ${description}</p>
        <a href="">View Post</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

module.exports = {
    adminNewTextData,
    userNewTextData,
    userNewTextDataAccepted,
}