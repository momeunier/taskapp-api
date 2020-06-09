const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// message = {
//     to: 'momeunier@gmail.com',
//     from: 'momeunier@bonneidee.biz',
//     subject: 'This is my first creation',
//     text: 'I hope you will get this message'
// }

// console.log(message)

// sgMail.send(message).then(res => console.log(res)) // see the response
// .catch(e => console.log(e)) // see the error if


const sendWelcomeEmail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: 'momeunier@bonneidee.biz',
            subject: 'Thanks for joining!',
            text: `Welcome to the app, ${name}. Let me know how you get along with the app` 
        })
            
    } catch (e) {
        console.log(e)        
    }
}

const sendGoodByeEmail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: 'momeunier@bonneidee.biz',
            subject: 'Sorry to see you go',
            text: `Sorry to see you go, ${name}. Let me know if there is anything else we could have done to keep you onboard`
        })
    } catch (e) {
        console.log(e)
    }

    
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}