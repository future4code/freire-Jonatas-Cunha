export const UserNameChecker = (username, setInvalidUsername, setLoading) => {
    if (username.length < 3) {
        setLoading(0);
        setInvalidUsername(true)
        return true;
    } else {
        setInvalidUsername(false)
        return false;
    }
}