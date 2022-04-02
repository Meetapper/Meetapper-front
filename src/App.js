import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Layout from "./components/Layout";
import MeetsPage from "./pages/MeetsPage";

const theme = createTheme({
    palette: {
        // mode: "light",
        primary: {
            main: "#661f31"
        },
        secondary: {
            main: "#000000",
        },
        background: {
            default: "#f0f0f0",
            paper: "#f5f5f5"
        },
        //     text: {
        //         primary: "rgba(173,186,199,1)",
        //         secondary: "rgba(173,186,199,0.7)",
        //         disabled: "rgba(173,186,199,0.5)",
        //         hint: "rgba(173,186,199,0.4)",
        //     },
    },
    typography: {
        fontFamily: ["Lexend Deca", "sans-serif"].join(","),
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<LoginPage/>}/>
                            <Route path="/meets" element={<MeetsPage/>}/>
                        </Routes>
                    </Layout>
                </Router>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
