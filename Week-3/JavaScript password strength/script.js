// Your solution goes here 
const isStrongPassword = (password) => {
    try {
        let isPasswordWeak = false;
        if ((password.length < 8) || (password.includes("password")) || !Boolean(password.match(/[A-Z]/))) {
            isPasswordWeak = true
        }

        return !isPasswordWeak

    } catch (error) {
        return { message: error }
    }
}