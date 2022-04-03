import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import Layout from "./components/Layout";
import EventCreation from './pages/EventCreation';
import FriendsList from "./pages/FriendsList";
import Register from './pages/Register';
import Logout from './pages/Logout';
import MeetsPage from './pages/MeetsPage';
import Meeting from './pages/Meeting';

const theme = createTheme({
    palette: {
        mode: "light",
          primary: {
            main: "#013243"
        },
        secondary: {
            main: "#000000",
        },
        background: {
            default: "#f3f0f8",
            paper: "#f2f0f7"
        },
        // text: {
        //     primary: "rgba(173,186,199,1)",
        //     secondary: "rgba(173,186,199,0.7)",
        //     disabled: "rgba(173,186,199,0.5)",
        //     hint: "rgba(173,186,199,0.4)",
        // },
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
            <CssBaseline>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<LoginPage />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/logout" element={<Logout />}/>
                            <Route path="/create-event" exact element={<EventCreation />}/>
                            <Route path="/meets" element={<MeetsPage/>}/>
                            <Route path="/friends" element={<FriendsList/>}/>
                            <Route path="/meeting/:id" element={<Meeting/>}/>
                        </Routes>
                    </Layout>
                </Router>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
