let manyEmails = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@ out.com"]

let validEmails = []

function checkEmail(email)
{
    if(email.includes(" ") || !email.includes("@"))
    {
        return
    }

    else 
    {
        return validEmails.push(email)
    }
}

manyEmails.forEach(checkEmail)

console.log("Valid Emails:")

console.log(validEmails)

console.log("Complete!")