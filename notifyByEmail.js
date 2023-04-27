const notifyByEmail = (email) => {
    return (`Email sent to: ${email}`);
}

const notifyByText = (phone_number) => {
    return (`Text sent to: ${phone_number}`);
}

const notify = (email, notifyFunction) => [
    return notifyFunction(email);
]

const notify = (text, notifyFunction) => [
    return notifyFunction(text);
]