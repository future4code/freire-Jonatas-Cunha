export interface IShowDB {
    id: string,
    band: string,
    starts_at: Date
}

export interface IShowInputDTO {
    token: string,
    band: string,
    startAt: Date
}

export interface ITicketDB {
    id: string,
    show_id: string,
    user_id: string
}

export interface IBuyTicketInputDTO {
    token: string,
    showId: string
}

export interface IUserAlreadyBoughtTicket {
    userId: string,
    showId: string,
}

export class Show {

    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private tickets: number = 5000
    ) { }

    // Getters
    public getId = () => this.id
    public getBand = () => this.band
    public getStartsAt = () => this.startsAt
    public getTickets = () => this.tickets

    // Setters
    public setId = (newId: string) => { this.id = newId }
    public setBand = (newBand: string) => { this.band = newBand }
    public setStartsAt = (newStartsAt: Date) => { this.startsAt = newStartsAt }
    public setTickets = (newTickets: number) => { this.tickets = newTickets }

    // Static methods - convert to model
    public static toShowModel = (show: any): Show => {
        return new Show(show.id, show.band, show.starts_at)
    }
}
