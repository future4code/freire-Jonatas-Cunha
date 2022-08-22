export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToRegister = (navigate) => {
    navigate("/signup")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const backPage = (navigate) => {
    navigate(-1)
}