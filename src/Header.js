import { AppBar, Autocomplete, Tabs, Tab ,TextField, Toolbar } from "@mui/material";
import React from "react";
import MovieIcon from '@mui/icons-material/Movie';
import { Box } from '@mui/system';

const dummyArray = ["Lagaan" , "99songs"];

const Header = () => {
    return <AppBar>
        <Toolbar>
            <Box width={'20%'}>
                <MovieIcon /><h1></h1>
            </Box>
            <Box width={'50%'} margin={'auto'}>
            <Autocomplete
                freeSolo
                options={dummyArray.map((option) => option)}
                renderInput={(params) => <TextField variant="standard" {...params} label="Search Across Movies" />}
            />
            </Box>
            <Box display={'flex'}>
                <Tabs textColor={"inherit"} indicatorColor={"secondary"} value={0}>
                    <Tab label="Movies"></Tab>
                    <Tab label="Admin"></Tab>
                    <Tab label="Auth"></Tab>
                        
                </Tabs>

            </Box>
        </Toolbar>
    </AppBar>
};

export default Header;