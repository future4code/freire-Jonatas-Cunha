import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { IBuyTicketInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}


    public createShow = async (req: Request, res: Response) => {
        try {

            const input = {
                token: req.headers.authorization as string,
                band: req.body.band,
                startAt: req.body.startAt,
            }

            await this.showBusiness.createShow(input)

            res.status(200).send({message: "Show created successfully"})
        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        
        try {
            const token = req.headers.authorization as string

            const shows = await this.showBusiness.getShowsList(token)

            res.status(200).send({shows})

        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }

    public buyTicket = async (req: Request, res: Response) => {
        try {
            const input: IBuyTicketInputDTO = {
                token: req.headers.authorization as string,
                showId: req.body.showId
            }

            await this.showBusiness.buyTicket(input)

            res.status(200).send({message: "Ticket bought successfully"})

        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }

    public cancelBuyTicket = async (req: Request, res: Response) => {
        try {
            const input: IBuyTicketInputDTO = {
                token: req.headers.authorization as string,
                showId: req.body.showId
            }

            await this.showBusiness.cancelBuyTicket(input)

            res.status(200).send({message: "Ticket canceled successfully"})

        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }


}