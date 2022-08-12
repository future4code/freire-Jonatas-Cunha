enum ROLE {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

type User = {
    name: string,
    email: string,
    role: ROLE,
}

const users: User[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

function getUsersByRole (users: User[]): string[] {
    return users.filter(user => user.role === ROLE.ADMIN).map(user => user.email)
}

console.log(getUsersByRole(users))