export const PasswordChecker = (password, setInvalidPassword, setLoading) => {
    if (password.length <= 7) {
        setLoading(0);
        setInvalidPassword(true)
        return true;
    } else {
        setInvalidPassword(false)
        return false;
    }
}