function generateOTP(length) {
    let otp = ' ';
    for (let i = 0; i < array.length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}

console.log(generateOTP(4))