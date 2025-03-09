const nodemailer = require("nodemailer");

const sendStudentRegistrationEmail = async (user) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'codingez7@gmail.com', // Your email id
                pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
            }
        });

        // Define the email template for admin
        let emailTemplate_admin = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Student Registration</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
                h1 { text-align: center; color: #333; }
                p { font-size: 16px; color: #555; line-height: 1.6; }
                .details { background-color: #f9f9f9; padding: 10px; border-radius: 5px; }
                .details p { margin: 5px 0; font-weight: bold; }
                .button { display: block; width: 200px; margin: 20px auto; text-align: center; background-color: #007BFF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; }
                .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Student Registration</h1>
                <p>Hello Admin,</p>
                <p>A new student has submitted a registration request. Below are the details:</p>
                
                <div class="details">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Department:</strong> ${user.department}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Year:</strong> ${user.year}</p>
                </div>

                <a href="https://your-admin-panel-link.com" class="button">View in Admin Panel</a>

                <p class="footer">This is an automated message. Please do not reply.</p>
            </div>
        </body>
        </html>`;

        // Define the email template for student
        let emailTemplate_student = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Student Registration Request Sent</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
                h1 { text-align: center; color: #333; }
                p { font-size: 16px; color: #555; line-height: 1.6; }
                .details { background-color: #f9f9f9; padding: 10px; border-radius: 5px; }
                .details p { margin: 5px 0; font-weight: bold; }
                .button { display: block; width: 200px; margin: 20px auto; text-align: center; background-color: #007BFF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; }
                .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Student Registration Request Sent</h1>
                <p>Hello ${user.name},</p>
                <p>Your registration request has been sent to the admin. You will be notified once it is approved. Below are the details:</p>
                
                <div class="details">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Department:</strong> ${user.department}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Year:</strong> ${user.year}</p>
                </div>
                <p class="footer">This is an automated message. Please do not reply.</p>
            </div>
        </body>
        </html>`;

        // Email to Admin
        let mailOptions_admin = {
            from: "codingez7@gmail.com",
            to: "chopadeaditya55@gmail.com",
            subject: "New Student Registration",
            html: emailTemplate_admin
        };

        // Email to Student
        let mailOptions_student = {
            from: "codingez7@gmail.com",
            to: user.email,
            subject: "Your Registration Request Has Been Sent",
            html: emailTemplate_student
        };

        // Send emails
        await transporter.sendMail(mailOptions_admin);
        await transporter.sendMail(mailOptions_student);

        console.log("Emails sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

const sendStudentRegistrationStatusEmail = async (user, status) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'codingez7@gmail.com', // Your email id
                pass: 'mvoh tszg pgek eufb'   // Your email password or App Password if 2FA is enabled
            }
        });

        // Define the email template for admin
        let emailTemplate_admin = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Student Registration Status</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
                h1 { text-align: center; color: #333; }
                p { font-size: 16px; color: #555; line-height: 1.6; }
                .details { background-color: #f9f9f9; padding: 10px; border-radius: 5px; }
                .details p { margin: 5px 0; font-weight: bold; }
                .button { display: block; width: 200px; margin: 20px auto; text-align: center; background-color: #007BFF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; }
                .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Student Registration Status: ${status}</h1>
                <p>Hello Admin,</p>
                <p>You have ${status} a registration request of a student. Below are the details:</p>
                
                <div class="details">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Department:</strong> ${user.department}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Year:</strong> ${user.year}</p>
                </div>

                <a href="https://your-admin-panel-link.com" class="button">View in Admin Panel</a>

                <p class="footer">This is an automated message. Please do not reply.</p>
            </div>
        </body>
        </html>`;

        // Define the email template for student
        let emailTemplate_student = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Student Registration Request Status</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
                h1 { text-align: center; color: #333; }
                p { font-size: 16px; color: #555; line-height: 1.6; }
                .details { background-color: #f9f9f9; padding: 10px; border-radius: 5px; }
                .details p { margin: 5px 0; font-weight: bold; }
                .button { display: block; width: 200px; margin: 20px auto; text-align: center; background-color: #007BFF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; }
                .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>New Student Registration Request Status: ${status}</h1>
                <p>Hello ${user.name},</p>
                <p>Your registration request has been ${status} by the admin. Below are the details:</p>
                
                <div class="details">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Department:</strong> ${user.department}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Year:</strong> ${user.year}</p>
                </div>
                <p class="footer">This is an automated message. Please do not reply.</p>
            </div>
        </body>
        </html>`;

        // Email to Admin
        let mailOptions_admin = {
            from: "codingez7@gmail.com",
            to: "chopadeaditya55@gmail.com",
            subject: "New Student Registration",
            html: emailTemplate_admin
        };

        // Email to Student
        let mailOptions_student = {
            from: "codingez7@gmail.com",
            to: user.email,
            subject: "Your Registration Request Has Been Sent",
            html: emailTemplate_student
        };

        // Send emails
        await transporter.sendMail(mailOptions_admin);
        await transporter.sendMail(mailOptions_student);

        console.log("Emails sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};


// Example usage
module.exports = {
    sendStudentRegistrationEmail, // Test Success
    sendStudentRegistrationStatusEmail,
};
