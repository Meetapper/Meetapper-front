import React from "react";
import Footer from "./Footer";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

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
            <ContentBox>
                {children}
            </ContentBox>
            <Footer />
        </RootBox>
    );
};

export default Layout;
