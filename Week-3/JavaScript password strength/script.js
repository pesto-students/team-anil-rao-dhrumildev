// Your solution goes here 
const isStrongPassword = (password) => {
    try {
        let isPasswordWeak = false;
        if ((password.length < 8) || (password.includes("password")) || !Boolean(password.match(/[A-Z]/))) {
            isPasswordWeak = true
        }

        if (isPasswordWeak) {
            return false
        } else {
            return true
        }

    } catch (error) {
        return { message: error }
    }
}