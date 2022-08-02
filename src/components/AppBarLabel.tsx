import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import ListAltIcon from '@mui/icons-material/ListAlt';


const AppBarLabel = (props: { label: string; button: any; }) => {
    return (
      <Box>
        <Toolbar>
          {props.button ? (
          <Link to="/" >
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          ) : null}
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            {props.label}
          </Typography>
          {props.button}
        </Toolbar>
      </Box>
    );
  }

export default AppBarLabel;