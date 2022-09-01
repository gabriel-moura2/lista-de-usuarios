import { CircularProgress, Container, Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarLabel, CommentList, PostList } from "../components";

const CommentPage = () => {
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [navLoading, setNavLoading] = useState(true);
    const [user, setUser] = useState('Lista de Tarefas');
    const [post, setPost] = useState({title: "", body: ""});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/post/${params.postId}/comments`)
        .then(resposta => resposta.json())
        .then(json => {
            setComment(json);
            setLoading(false);
        })
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then(resposta => resposta.json())
        .then(json => { 
            setUser(json);
            setNavLoading(false);
        })
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then(resposta => resposta.json())
        .then(json => {
            setPost(json);
        })
    });


    return (
        <Container component="main" maxWidth="sm">
            {navLoading ? <CircularProgress/> : <AppBarLabel label={user} arrow post /> }
            {loading ? <CircularProgress/> : (
                <Box sx={{mt: 4}}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{post.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{post.body}</Typography>
                        </CardContent>
                    </Card>
                    <CommentList items={comment} />
                </Box>
             )}
        </Container>
    )
}

export default CommentPage;