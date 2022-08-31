import { Box, Paper, Grid, Typography } from "@mui/material";

const CommentList = (props: {items: any[]}) => {
    return (
        <Box sx={{marginTop: 8}}>
            <Grid container spacing={6}>
                {props.items.map(item => (
                    <Grid item key={item.id} md={6}>
                        <Paper>
                            <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.body}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CommentList;