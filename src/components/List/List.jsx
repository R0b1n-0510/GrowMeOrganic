import "./List.css"
import React from 'react'
import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"


const List = ({ validateform }) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log(validateform);
        if (validateform === false) {
            navigate('/')
        }
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [])
    const users = posts.map((user, index) => (
        {
            id: `${index++}`,
            firstName: `${user.name}`,
            email: `${user.email}`
        }
    ))
    const Columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'firstName',
            headerName: "Name",
            width: 200,
        }, {
            field: 'email',
            headerName: "E-mail",
            width: 350,
        }
    ]
    return (
        <Box sx={{ width: 1, maxWidth: 700, textAlign: "center", margin: "auto" }}>
            <Typography sx={{ fontSize: 40 }}>React Data Grid (Mui)</Typography>
            <Box sx={{ height: 650, width: 1, margin: "auto" }}>
                <DataGrid
                    sx={{ height: "100%", width: 1 }}
                    rows={users}
                    columns={Columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Box>
        </Box>
    )
}
export default List