export const EmailChecker = (email, setInvalidEmail, setLoading) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        setLoading(0);
        setInvalidEmail(true);
        return true;
    } else {
        setInvalidEmail(false);
        return false;
    }
}