import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';
import ListAltIcon from '@mui/icons-material/ListAlt';

const AppList = (props: {items: any[]} ) => {
    return (
        <Box sx={{marginTop: 8}}>
            <List>
                {props.items.map(item => (
                    <ListItem key={item.id}>
                        <ListItemButton>
                            <ListItemText primary={item.name} />
                            <ListItemIcon>
                                <Link to={`/user/${item.id}/tasks`}>
                                    <IconButton>
                                        <ListAltIcon />
                                    </IconButton>
                                </Link>
                            </ListItemIcon>
                            <ListItemIcon>
                                <Link to={`/user/${item.id}/posts`}>
                                    <IconButton>
                                        <CommentIcon />
                                    </IconButton>
                                </Link>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default AppList