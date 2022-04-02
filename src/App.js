import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import {createTheme, ThemeProvider} from "@mui/material";
import Layout from "./components/Layout";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3ED7C2",
        },
        secondary: {
            main: "#ff4b3a",
        },
        background: {
            default: "rgba(8,1,9,1)",
            paper: "rgba(8,1,9,1)",
        },
        text: {
            primary: "rgba(173,186,199,1)",
            secondary: "rgba(173,186,199,0.7)",
            disabled: "rgba(173,186,199,0.5)",
            hint: "rgba(173,186,199,0.4)",
        },
    },
    // typography: {
    //     fontFamily: ["Lexend Deca", "sans-serif"].join(","),
    // },
    // overrides: {
    //     MuiCssBaseline: {
    //         "@global": {
    //             body: {
    //                 background: "linear-gradient(40deg, #200122, #6f0000)",
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundAttachment: "fixed",
    //             },
    //         },
    //     },
    // },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                    </Routes>
                </Router>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
