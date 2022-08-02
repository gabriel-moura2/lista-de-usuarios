import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const TaskList = (props: {items: any[]} ) => {
    return (
        <Box>
            <List>
                {props.items.map(item => (
                    <ListItem key={item.id}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.completed ? <Checkbox defaultChecked/> : <Checkbox />}
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