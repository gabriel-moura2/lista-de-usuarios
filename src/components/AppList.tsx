import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";

const AppList = (props: {items: any[]} ) => {
    return (
        <Box>
            <List>
                {props.items.map(item => (
                <ListItem key={item.id}>
                    <ListItemButton>
                        <Link to={`/user/${item.id}`}><ListItemText primary={item.name} /></Link>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default AppList