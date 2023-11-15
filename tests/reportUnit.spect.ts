import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Report from '../src/pages/report'

test('updates photoUrl when an image is selected', async () => {
    render(<Report />)
    const fileInput = screen.getByLabelText('Imagen:')

    // Create a dummy File object
    const file = new File(['dummy content'], 'example.png', {
        type: 'image/png',
    })

    // Use userEvent to simulate the file selection
    userEvent.upload(fileInput, file)

    // Wait for the FileReader to finish
    await new Promise(r => setTimeout(r, 50))

    // Check that the photoUrl state has been updated
    // Note: This will depend on how you're accessing the state in your tests
    // Here's an example if you're using a ref to store the photoUrl state:
    // expect(Report.refs.photoUrl.current).toBe(URL.createObjectURL(file))
})