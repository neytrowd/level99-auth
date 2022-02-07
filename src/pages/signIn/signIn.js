import './signIn.scss';
import {NavLink, useHistory} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import axios from "axios";
import {LOGIN} from "../../redux/reducers/authReducer";
import {HIDE_LOADER, SHOW_LOADER} from "../../redux/reducers/loaderReducer";
import {useDispatch} from "react-redux";
import {delay} from "../../Utils";
import styleSignIn from "./styleSignIn";

const SignIn = () => {
    const classes = styleSignIn();
    const history = useHistory();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    const changeHandler = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const login = async (event) => {
        try {
            event.preventDefault();

            if (form.email && form.password) {
                dispatch({type: SHOW_LOADER});
                await delay();
                let response = await axios.get(`db/login.json`)
                // await axios.post('${base_url}/real_url', form)

                let {token, ...data} = response.data
                dispatch({type: LOGIN, payload: data})
                localStorage.setItem('auth-token', token);
                dispatch({type: HIDE_LOADER})
                history.push('/')
            }
        } catch (e) {
            dispatch({type: HIDE_LOADER})
            console.log(e.message)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    Sign in
                </Typography>

                <form noValidate>
                    <TextField
                        variant="outlined" margin="normal" required fullWidth
                        name="email" label="Email Address" autoComplete="email" autoFocus
                        onChange={changeHandler} value={form.email}
                    />
                    <TextField
                        variant="outlined" margin="normal" required fullWidth
                        name="password" label="Password" type="password"
                        onChange={changeHandler} value={form.password}
                    />
                    <Box marginTop={3}>
                        <Button
                            type="submit" fullWidth variant="contained" color="primary"
                            onClick={login}
                        >
                            Sign In
                        </Button>
                    </Box>
                </form>
            </div>
            <Box marginTop={3} textAlign='center'>
                <NavLink to='/signUp' className={classes.register}>Not a user ? Register</NavLink>
            </Box>
        </Container>

    )
}

export default SignIn;