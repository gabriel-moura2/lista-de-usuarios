import { Box, Paper, Stack, Avatar, Typography } from "@mui/material";

const CommentList = (props: {items: any[]}) => {
    return (
        <Box sx={{marginTop: 8}}>
            {props.items.map(item => (
                <Stack key={item.id} spacing={1}>
                    <Paper sx={{p: 2}}>
                        <Stack direction="row" spacing={1}>
                            <Avatar alt={item.email} sx={{ width: 24, height: 24 }}/>
                            <Typography variant="subtitle2">{item.email}</Typography>
                        </Stack>
                        <Typography gutterBottom variant="h6" component="div">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.body}</Typography>
                    </Paper>
                </Stack>
                
            ))}
        </Box>
    )
}

export default CommentList;