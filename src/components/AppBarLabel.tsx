import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';
import CommentIcon from '@mui/icons-material/Comment';


const AppBarLabel = (props: any) => {
    const arrowIcon = (
      <Link to="/" >
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
      </Link>
    )

    const postIcon = (
      <Link to={`/user/${props.label.id}/posts`}>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </Link>
    )

    const taskIcon = (
      <Link to={`/user/${props.label.id}/tasks`}>
        <IconButton>
          <ListAltIcon />
        </IconButton>
      </Link>
    )

    return (
      <Box>
        <Toolbar>
          {props.arrow ? arrowIcon : null}
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            {props.label.name}
          </Typography>
          {props.post ? postIcon : null}
          {props.task ? taskIcon : null}
          <Button>Login</Button>
          <Button>Logout</Button>
        </Toolbar>
      </Box>
    );
  }

export default AppBarLabel;