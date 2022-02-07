import React, {useState} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AppBar from "@material-ui/core/AppBar";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useDispatch} from "react-redux";
import {LOGOUT} from "../../redux/reducers/authReducer";
import {useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [openSettings, setOpenSettings] = useState(null);
    const handleClose = () => setOpenSettings(null);
    const handleClick = (event) => setOpenSettings(event.currentTarget);

    const logout = () => {
        dispatch({type: LOGOUT});
        localStorage.removeItem('auth-token');
        history.push('/signIn')
    }

    return (
        <>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0}>
                <Container>
                    <Toolbar>
                        <Box
                            display={'flex'} justifyContent='flex-end'
                            width={'100%'} alignItems={'center'}
                        >
                            <Avatar>
                                <Tooltip title='Actions'>
                                    <IconButton onClick={handleClick}>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Avatar>
                            <Menu
                                anchorEl={openSettings} keepMounted
                                open={Boolean(openSettings)} onClose={handleClose}
                            >
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header