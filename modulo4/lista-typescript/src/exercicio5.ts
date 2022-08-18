enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

type User = {
    name: string,
    email: string,
    role: Role,
}

const users: User[] =  [
	{name: "Rogério", email: "roger@email.com", role: Role.USER},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
]

function getUsersByRole (users: User[]): string[] {
    return users.filter(user => user.role === Role.ADMIN).map(user => user.email)
}

console.log(getUsersByRole(users))