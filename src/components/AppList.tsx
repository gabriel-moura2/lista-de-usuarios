import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";

const AppList = (props: {items: any[]} ) => {
    return (
        <Box>
            <List>
                {props.items.map(item => (
                <Link to={`/user/${item.id}`}>
                    <ListItem key={item.id}>
                        <ListItemButton>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                ))}
            </List>
        </Box>
    )
}

export default AppList