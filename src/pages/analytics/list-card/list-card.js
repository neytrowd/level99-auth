import Box from "@material-ui/core/Box";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const ListCard = ({text}) => {

    return (
        <Box marginBottom='20px'>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ListCard;