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

async function sendEmailImage(){
    
}