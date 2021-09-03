class Validator {
    static isValidString(input, message) {
        if (input == null || input.trim() == "" || input == undefined) {
            throw new Error(message);
        }
    }

    static isValidPassword(input, message) {
        if (input == null || input.length < 8) {
            throw new Error(message);
        }
    }
    static isValidMobilenumber(input,message){
        if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})*$/.test(input)){
            throw new Error(message)
        }
    }
}