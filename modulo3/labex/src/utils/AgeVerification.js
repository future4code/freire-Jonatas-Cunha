
const AgeVerification = (age) => {

    if (parseInt(age) < 18) {
        return false;
    }
    return true;
}

export default AgeVerification;