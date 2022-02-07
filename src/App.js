import './App.scss';
import {Route, Switch, useHistory} from 'react-router-dom';
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Analytics from "./pages/analytics";
import {createTheme, ThemeProvider} from "@material-ui/core";
import Loader from "./components/loader";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {LOGIN} from "./redux/reducers/authReducer";
import {delay} from "./Utils";

function App() {
    const history = useHistory();
    const dispatch = useDispatch()
    const theme = createTheme({palette: {type: 'dark'}})

    useEffect(async () => {
        try {
            let token = localStorage.getItem('auth-token');
            if (token) {
                await delay();
                let response = await axios.get(`db/validToken.json`)
                            // await axios.post(`${base_url}/real_url`, {token})

                if (response.data.tokenIsValid) {
                    let response = await axios.get(`db/currentUser.json`)
                                // await axios.post(`${base_url}/real_url`, {token});
                    dispatch({type: LOGIN, payload: response.data})
                    history.push('/')
                }
            } else{
                history.push('/signIn')
            }
        } catch (e) {
            console.log(e.message)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Loader/>
            <Switch>
                <Route exact path='/' component={Analytics}/>
                <Route exact path='/signIn' component={SignIn}/>
                <Route exact path='/signUp' component={SignUp}/>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
