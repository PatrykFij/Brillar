import { Button, TextField, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { ActionsWrapper, FormWrapper, Register, RegistrationPageWrapper } from "./RegistrationPage.css";

const RegistrationPage: FC = () => {
    return (
        <RegistrationPageWrapper>
            <Register>
                <FormWrapper>
                    <Typography variant="h3">Brillar</Typography>
                    <TextField required id="outlined-required" label="e-mail" variant="outlined" />
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
                        <Button variant="contained" color="primary">
                            Zarejestruj
                        </Button>
                    </ActionsWrapper>
                </FormWrapper>
            </Register>
        </RegistrationPageWrapper>
    );
};

export default RegistrationPage;
