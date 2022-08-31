import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

const PostList = (props: {items: any[]}) => {
    return (
        <Box sx={{marginTop: 8}}>
            <Grid container spacing={6}>
                {props.items.map(item => (
                    <Grid item key={item.id} md={6}>
                        <Card >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.body}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Comentários</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PostList;