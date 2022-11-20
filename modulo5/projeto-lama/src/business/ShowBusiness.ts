import { ShowDatabase } from "../database/ShowDatabase"
import MissingParameters from "../errors/MissingParameters"
import { IBuyTicketInputDTO, IShowDB, IShowInputDTO, ITicketDB, Show } from "../models/Show"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import moment from 'moment'
import BadRequest from "../errors/BadRequest"
import Conflict from "../errors/Conflict"
import Unauthorized from "../errors/Unauthorized"
import { USER_ROLES } from "../models/User"
import NotFound from "../errors/NotFound"


export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }


    public createShow = async (input: IShowInputDTO): Promise<boolean> => {

        const { token, band, startAt } = input

        if (!token || !band || !startAt) {
            throw new MissingParameters("token, band and startAt")
        }

        if (typeof token !== "string" || typeof band !== "string") {
            throw new BadRequest("token and band must be strings")
        }

        const tokenValidation = this.authenticator.getTokenPayload(token)

        if (!tokenValidation) {
            throw new Unauthorized("Invalid token")
        }

        if (tokenValidation.role !== USER_ROLES.ADMIN) {
            throw new Unauthorized("Only admins can create shows")
        }


        if (!moment(startAt, "DD/MM/YYYY", true).isValid()) {
            throw new BadRequest("Invalid date format - use DD/MM/YYYY")
        }

        const dateFormatted = moment(startAt, "DD/MM/YYYY").format()

        if (dateFormatted < "2022-12-05") {
            throw new BadRequest("Date must be after 05/12/2022")
        }

        const dateAllreadyExists = await this.showDatabase.selectShowsByDate(dateFormatted)

        if (dateAllreadyExists.length) {
            throw new Conflict("Date already exists")
        }

        const id = this.idGenerator.generate()

        const newShow: IShowDB = {
            id,
            band,
            starts_at: new Date(dateFormatted),
        }

        await this.showDatabase.createShow(newShow)

        return true

    }


    public getShowsList = async (token: string): Promise<any> => {

        if (!token) {
            throw new MissingParameters("token")
        }

        if (typeof token !== "string") {
            throw new BadRequest("token must be a string")
        }

        const tokenValidation = this.authenticator.getTokenPayload(token)

        if (!tokenValidation) {
            throw new Unauthorized("Invalid token")
        }

        const result = await this.showDatabase.selectShows()

        if (!result.length) {
            throw new NotFound("No shows found")
        }

        const shows = result.map((show: any) => {
            show.starts_at = moment(show.starts_at).format("DD/MM/YYYY")
            return Show.toShowModel(show)
        })


        return shows

    }

    public buyTicket = async (input: IBuyTicketInputDTO): Promise<boolean> => {

        const { token, showId } = input

        if (!token || !showId) {
            throw new MissingParameters("token and showId")
        }

        if (typeof token !== "string" || typeof showId !== "string") {
            throw new BadRequest("token and showId must be strings")
        }

        const tokenValidation = this.authenticator.getTokenPayload(token)

        if (!tokenValidation) {
            throw new Unauthorized("Invalid token")
        }

        const show = await this.showDatabase.selectShowById(showId)

        if (!show.length) {
            throw new NotFound("Show not found")
        }

        const userAlreadyHasTicket = await this.showDatabase.selectTicketByUserIdAndShowId({
            userId: tokenValidation.id,
            showId
        })

        if (userAlreadyHasTicket.length) {
            throw new Conflict("User already has a ticket for this show")
        }

        const showDate = moment(show[0].starts_at, "YYYY-MM-DD").format("DD/MM/YYYY")


        if (new Date() > new Date(show[0].starts_at)) {
            throw new BadRequest("Show already happened")
        }

        const ticket: ITicketDB = {
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: tokenValidation.id
        }

        await this.showDatabase.insertBuyTicket(ticket)

        return true

    }


    public cancelBuyTicket = async (input: IBuyTicketInputDTO): Promise<boolean> => {
            
            const { token, showId } = input
    
            if (!token || !showId) {
                throw new MissingParameters("token and showId")
            }
    
            if (typeof token !== "string" || typeof showId !== "string") {
                throw new BadRequest("token and showId must be strings")
            }
    
            const tokenValidation = this.authenticator.getTokenPayload(token)
    
            if (!tokenValidation) {
                throw new Unauthorized("Invalid token")
            }
    
            const show = await this.showDatabase.selectShowById(showId)
    
            if (!show.length) {
                throw new NotFound("Show not found")
            }
    
            const userAlreadyHasTicket = await this.showDatabase.selectTicketByUserIdAndShowId({showId, userId: tokenValidation.id})

            if (!userAlreadyHasTicket.length) {
                throw new NotFound("User does not have a ticket for this show")
            }

            if(new Date() >= new Date(show[0].starts_at)) {
                throw new BadRequest("You can't cancel a ticket for a show that already happened")
            }

            await this.showDatabase.deleteBuyTicket({showId, userId: tokenValidation.id})

            return true
    }


}