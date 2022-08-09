import { Box, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const TaskList = (props: {items: any[]} ) => {
    return (
        <Box sx={{marginTop: 8}}>
            <List>
                {props.items.map(item => (
                    <ListItem key={item.id}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox checked={item.completed} />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default TaskList;