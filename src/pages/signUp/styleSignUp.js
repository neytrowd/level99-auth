import makeStyles from "@material-ui/core/styles/makeStyles";

const styleSignUp = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(9),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    signIn: {
        color: '#fff'
    }
}));

export default styleSignUp;