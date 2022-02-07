import {makeStyles} from "@material-ui/core";

const styleSignIn = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        marginTop: theme.spacing(12)
    },
    avatar: {
        margin: 'auto',
        marginBottom: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    register: {
        color: '#fff'
    }
}));

export default styleSignIn;