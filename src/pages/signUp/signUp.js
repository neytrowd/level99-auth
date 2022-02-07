import './signUp.scss';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {LOGIN} from "../../redux/reducers/authReducer";
import {HIDE_LOADER, SHOW_LOADER} from "../../redux/reducers/loaderReducer";
import {delay} from "../../Utils";
import styleSignUp from "./styleSignUp";

const SignUp = () => {
    const classes = styleSignUp();
    const history = useHistory();
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });

    const changeHandler = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const signUp = async (event) => {
        try {
            event.preventDefault();
            if (form.email && form.password) {
                dispatch({type: SHOW_LOADER});
                await delay();
                await axios.get('db/signUp.json');
                // await axios.post(`${base_url}/real_url`, form);

                let response = await axios.get(`db/login.json`)
                // await axios.post('${base_url}/real_url', form)

                let {token, ...data} = response.data
                dispatch({type: LOGIN, payload: data})
                localStorage.setItem('auth-token', token);
                history.push('/');
                dispatch({type: HIDE_LOADER})
            }
        } catch (err) {
            dispatch({type: HIDE_LOADER})
            console.log(err.message)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                <Typography component="h1" variant="h5">Register</Typography>

                <form noValidate>
                    <TextField
                        variant="outlined" required fullWidth label="Name" size={"small"}
                        name="name" autoComplete="email" autoFocus margin="normal"
                        onChange={changeHandler} value={form.name}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Email Address"
                        name="email" margin="normal" size={"small"}
                        onChange={changeHandler} value={form.email}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Password"
                        name="password" type="password" margin="normal" size={"small"}
                        onChange={changeHandler} value={form.password}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Confirm Password"
                        name="confirmPassword" type="password" margin="normal" size={"small"}
                        onChange={changeHandler} value={form.confirmPassword}
                    />
                    <Box marginTop={3} marginBottom={2}>
                        <Button
                            type="submit" fullWidth variant="contained" color="primary"
                            onClick={signUp}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </div>
            <Box marginTop={3} textAlign='center'>
                <NavLink to='/signIn' className={classes.signIn}>Already have an account ? Log in</NavLink>
            </Box>
        </Container>

    )
}

export default SignUp;