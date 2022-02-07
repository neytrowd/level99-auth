import {getRandomList} from "./dataset";
import {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {delay} from "../../../Utils";
import ListCard from "../list-card";
import {useDispatch} from "react-redux";
import {HIDE_LOADER, SHOW_LOADER} from "../../../redux/reducers/loaderReducer";


const List = () => {
    const dispatch = useDispatch();
    const [list, setList] = useState([]);

    useEffect(async () => {
        try {
            dispatch({type: SHOW_LOADER});
            await delay();

            setList(getRandomList(200));
            // await axios.post(`${base_url}/real_url`, {token})
            dispatch({type: HIDE_LOADER})

        } catch (e) {
            dispatch({type: HIDE_LOADER})
            console.log(e.message)
        }
    }, [])


    return (
        <Box overflow={'auto'} maxHeight={500} margin={'80px 0'}>
            {
                list.map(item => <ListCard text={item.text} key={item.id}/>)
            }
        </Box>
    )
}

export default List;