import { Button, TextField, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React, { FC } from "react";
import { ActionsWrapper, FormWrapper, Login, LoginPageWrapper, LoginWrapper, RegisterWrapper } from "./LoginPage.css";

const LoginPage: FC = () => {
    return (
        <LoginPageWrapper>
            <Login>
                <FormWrapper>
                    <Typography variant="h3">Brillar</Typography>
                    <TextField required id="outlined-required" label="Login" variant="outlined" />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Hasło"
                        type="password"
                        placeholder="Hasło"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <ActionsWrapper>
                        <LoginWrapper>
                            <Typography>Nie pamiętasz hasła?</Typography>
                            <Button variant="contained" color="primary">
                                Zaloguj
                            </Button>
                        </LoginWrapper>
                        <RegisterWrapper>
                            <Typography>Nie masz jeszcze konta?</Typography>
                            <Button variant="contained" color="primary">
                                Zarejestruj się
                            </Button>
                        </RegisterWrapper>
                    </ActionsWrapper>
                </FormWrapper>
            </Login>
        </LoginPageWrapper>
    );
};

export default LoginPage;
