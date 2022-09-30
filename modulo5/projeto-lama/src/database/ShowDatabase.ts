import { IShowDB, ITicketDB, IUserAlreadyBoughtTicket } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public deleteBuyTicket = async (input: IUserAlreadyBoughtTicket): Promise<void> => {
        await BaseDatabase.connection
            .delete()
            .from(ShowDatabase.TABLE_TICKETS)
            .where({ user_id: input.userId, show_id: input.showId })
    }

    public insertBuyTicket = async (input: ITicketDB): Promise<void> => {
        await BaseDatabase.connection
            .insert(input)
            .into(ShowDatabase.TABLE_TICKETS)
    }

    public selectTicketByUserIdAndShowId = async (input: IUserAlreadyBoughtTicket): Promise<any> => {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ShowDatabase.TABLE_TICKETS)
            .where({ show_id: input.showId, user_id: input.userId })

        return result
    }

    public selectShowById = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ShowDatabase.TABLE_SHOWS)
            .where({ id })

        return result
    }

    public selectShowsByDate = async (date: string): Promise<any> => {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ShowDatabase.TABLE_SHOWS)
            .where("starts_at", date)

        return result
    }

    public createShow = async (input: IShowDB): Promise<void> => {
        await BaseDatabase.connection
            .insert(input)
            .into(ShowDatabase.TABLE_SHOWS)
    }

    public selectShows = async (): Promise<any> => {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ShowDatabase.TABLE_SHOWS)

        return result
    }

}