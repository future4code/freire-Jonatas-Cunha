export enum Status {
    TODO = 'to_do',
    DOING = 'doing',
    DONE = 'done'
};

export type User = {
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    title: string,
    description: string,
    limiteDate: string,
    creatorUserId: string
}

export type TaskUser = {
    task_id: string,
    responsible_user_id: string
}