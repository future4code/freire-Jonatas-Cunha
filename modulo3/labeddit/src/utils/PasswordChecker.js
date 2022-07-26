export const PasswordChecker = (password, setInvalidPassword, setLoading) => {
    if (password.length <= 7) {
        setLoading(false);
        setInvalidPassword(true)
        return true;
    } else {
        setInvalidPassword(false)
        return false;
    }
}