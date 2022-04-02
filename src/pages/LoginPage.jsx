import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <Grid container>
            <Grid>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <Grid>
                    <Link to="/reset">Forgot Password</Link>
                </Grid>
                <Grid>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </Grid>
            </Grid>
        </Grid>
    );
}
export default LoginPage;
