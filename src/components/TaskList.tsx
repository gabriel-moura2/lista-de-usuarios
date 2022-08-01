import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const TaskList = (props: {items: any[]} ) => {
    return (
        <Box>
            <List>
                {props.items.map(item => (
                <ListItem key={item.id}>
                    <ListItemButton>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default TaskList;