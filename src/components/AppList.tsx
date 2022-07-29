import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const AppList = (props: {items: any[]} ) => {
    return (
    <Box>
        <List>
            {props.items.map(item => (
            <ListItem key={item.id}>
                <ListItemButton component="a">
                    <ListItemText primary={item.name} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Box>
    )
}

export default AppList