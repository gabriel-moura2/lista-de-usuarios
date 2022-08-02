import { Box, Card, CardContent, Typography } from "@mui/material";

const PostList = (props: {items: any[]}) => {
    return (
        <Box>
            {props.items.map(item => (
                <Card key={item.id}>
                    <CardContent>
                        <Typography variant="h2">{item.title}</Typography>
                        <Typography paragraph>{item.body}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}

export default PostList;