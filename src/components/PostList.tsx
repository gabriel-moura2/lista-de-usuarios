import { Box, Typography } from "@mui/material";

const PostList = (props: { items: any[] }) => {
    return (
        <Box>
            {props.items.map((item) => {
                <Typography variant="h2">{item.title}</Typography>
            })}
        </Box>
    )
}

export default PostList;