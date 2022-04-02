import React from "react";
import Footer from "./Footer";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";

const RootBox = styled(Box)(({theme}) => ({
    flexGrow: 1,
    display: "flex"
}))

const ContentBox = styled(Box)(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(2)
}))

const Layout = ({children}) => {
    return (
        <RootBox>
            <Header>
                <ContentBox>
                    <Toolbar />
                    {children}
                </ContentBox>
                <Footer/>
            </Header>
        </RootBox>
    );
};

export default Layout;
