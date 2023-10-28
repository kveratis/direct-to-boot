import React from 'react';
import { render, screen } from '@testing-library/react';
import { DirectToBoot } from "./direct-to-boot";

describe('DirectToBoot', () => {
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
})