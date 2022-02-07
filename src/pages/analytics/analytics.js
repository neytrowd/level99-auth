import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Header from "../../components/header/header";
import Charts from "./charts";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import List from "./list";

const Analytics = () => {

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container component='main' maxWidth={"md"}>
               <Box margin='50px 0'>
                   <Charts/>
                   <List/>
               </Box>
            </Container>
        </>
    )
}

export default Analytics;