const nodemailer = require("nodemailer")

// Login Emails to Admin and User
async function sendEmailAdminNewLogin(name, dept, phone, year) {
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

async function sendEmailUser(student_email) {
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

// Text Data Post Emails
// Admin Email for new post request - TextData
async function adminNewTextData(name, email, department, phone, title, description) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
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

// User Email for Sending Post Request - TextData
async function userNewTextData(name, email, department, year, phone, title, description) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: 'Yout Post Request is under review by the admin', // Subject line
        html: `<h1>You will get notified as it gets accepted!! </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Year</b>: ${year}</p>
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

// Post Status Email to user
async function userNewTextDataStatus(name, email, department, phone, title, description, status) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: `Yout Post has been ${status} by the admin`, // Subject line
        html: `<h1>The post you send has been ${status} by the admin </h1>
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

// Post Status Email to admin
async function adminNewTextDataStatus(name, email, department, phone, title, description, status) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: `Your ${status} a Post Request`, // Subject line
        html: `<h1>Your ${status} a Post Request</h1>
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

// Image Data Post Emails
// Admin Email for new Post Request
async function adminNewImageEmail(name, email, department, phone, title, image_url) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: 'New Post Request', // Subject line
        html: `<h1>Got a new Post Request From: </h1>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <a href="${image_url}">View Image</a>
        <a href="">View Request</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

// User email for sending post request
async function userNewImageEmail(name, email, department, phone, title, image_url) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: 'Yout Post Request is under review by the admin', // Subject line
        html: `<h1>You will get notified as it gets accepted!! </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <p><b>Title</b>: ${title}</p>
        <a href="${image_url}">View Image</a>
        <a href="">View Image</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

// Status Email to User
async function userNewImageEmailStatus(name, email, department, phone, image_url, status) {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'service' if you are using a popular email provider like Gmail
        auth: {
            user: 'codingez7@gmail.com', // Your email id
            pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
        }
    });

    let mailOptions_admin = {
        from: 'codingez7@gmail.com', // Sender address
        to: email, // List of recipients
        subject: `Your Post has been ${status} by the admin`, // Subject line
        html: `<h1>The post you send has been ${status} by the admin </h1>
        <h3>Details: </h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Department</b>: ${department}</p>
        <p><b>Phone</b>: ${phone}</p>
        <a href="${image_url}">View Image</a>`
    };

    transporter.sendMail(mailOptions_admin, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Done !! Message sent: %s', info.messageId);
    });
}

// Post Status Email to admin
async function adminNewTextDataStatus(name, email, department, phone, image_url, status) {
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
        subject: `You ${status} a request`, // Subject line
        html: `<h1>You ${status} a post reqest </h1>
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

module.exports = {
    adminNewTextData,
    userNewTextData,
    userNewTextDataStatus,
    adminNewTextDataStatus,
    adminNewImageEmail,
    userNewImageEmail,
    userNewImageEmailStatus,
    adminNewTextDataStatus,
}