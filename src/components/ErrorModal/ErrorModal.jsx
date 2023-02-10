import React from 'react'
import { Box } from "@mui/system"
import { Button } from "@mui/material"

const ErrorModal = ({ error, errorhandler }) => {
    return (
        <div className='error-wrapper'>
            <Box className="form" sx={{ width: 1, maxWidth: 500, textAlign: "center", margin: "auto" }}>
                <h2>{error}</h2>
                <Button onClick={errorhandler}>Close</Button>
            </Box>
        </div>
    )
}

export default ErrorModal