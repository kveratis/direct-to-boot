import { setupServer } from "msw/node";
import { rest } from "msw";
import { Constants } from "../constants";

export const server = setupServer(
    rest.get(`${Constants.API_URL}/orders/:orderId`, ( req, res, ctx ) => {
        const orderId = req.params["orderId"]

        return res(
            ctx.json({
                order: orderId,
                status: "initialized"
            })
        )
    })
)