export const UserNameChecker = (username, setInvalidUsername, setLoading) => {
    if (username.length < 3) {
        setLoading(0);
        setInvalidUsername(true)
        return true;
    } else {
        setLoading(0);
        setInvalidUsername(false)
        return false;
    }
}