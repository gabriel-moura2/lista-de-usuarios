import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";


const AppBarLabel = (props: { label: string; button: boolean; }) => {
    return (
      <Box>
        <Toolbar>
          {props.button ? (
          <Link to="/" >
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          ) : (
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {props.label}
          </Typography>
        </Toolbar>
      </Box>
    );
  }

export default AppBarLabel;