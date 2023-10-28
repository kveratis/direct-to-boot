import React from 'react';
import { render, screen } from '@testing-library/react';
import { DirectToBoot } from "./direct-to-boot";

describe('DirectToBoot', () => {
  it('has title', () => {
    render(<DirectToBoot />)
    expect(screen.getByText('Direct To Boot')).toBeInTheDocument()
  })
})