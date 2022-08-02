import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const PostList = (props: {items: any[]}) => {
    return (
        <Grid container spacing={4}>
            {props.items.map(item => (
                <Grid item key={item.id} md={6}>
                    <Card >
                        <CardContent>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography paragraph>{item.body}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default PostList;