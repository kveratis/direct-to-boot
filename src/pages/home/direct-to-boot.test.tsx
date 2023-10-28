import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from "msw";
import { Constants } from "../../constants";
import { server } from "../../mocks/server";
import { DirectToBoot } from "./direct-to-boot";

describe('DirectToBoot', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    it('has title', () => {
    const title = 'Direct to Boot';

    render(<DirectToBoot />)

    expect(screen.getByText(title)).toBeInTheDocument()
    })

    it('has description', () => {
    const desc = "Please click the button when you have arrived, one of our friendly staff will bring your order to you."

    render(<DirectToBoot />)

    expect(screen.getByText(desc)).toBeInTheDocument()
    })

    it('i-am-here button is disabled by default when order is not ready', () => {
    render(<DirectToBoot />)

    expect(screen.queryByTestId('iamhere')).toBeDisabled();
    })

    it('i-am-here button is enabled when an order is ready', async () => {
        server.use(
            rest.get(`${Constants.API_URL}/orders/:orderId`, ( req, res, ctx ) => {
              const orderId = req.params["orderId"]

              return res(
                  ctx.json({
                    order: orderId,
                    status: "ready"
                  })
              )
            })
        )

        render(<DirectToBoot orderId="0444526344" />)

        await waitFor(() => expect(screen.getByTestId('iamhere')).toBeEnabled(), {
          timeout: 5000
        })
    })

    it('i-am-here button is enabled when an order is ready - polling', async () => {
        let count = 0;
        server.use(
            rest.get(`${Constants.API_URL}/orders/:orderId`, ( req, res, ctx ) => {
                const orderId = req.params["orderId"]

                if (count < 3) {
                    count = count + 1;
                    return res(
                        ctx.json({
                            order: orderId,
                            status: "pending"
                        })
                    )
                }

                return res(
                    ctx.json({
                        order: orderId,
                        status: "ready"
                    })
                )
            })
        )

        render(<DirectToBoot orderId="0444526344" />)

        await waitFor(() => expect(screen.getByTestId('iamhere')).toBeEnabled(), {
            timeout: 5000
        })
    })
})