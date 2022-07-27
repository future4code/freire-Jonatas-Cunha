
const token = localStorage.getItem('token');

const HEADERS = { headers: { auth: token} }

export default HEADERS;