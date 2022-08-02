import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarLabel } from "../components";

const Post = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('Lista de Comentários');

    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then(resposta => resposta.json())
        .then(json => { setUser(json.name); })
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
        .then(resposta => resposta.json())
        .then(json => {
            setPosts(json);
            setLoading(false);
        })
    });

    return (
        <Container>
            <AppBarLabel label={user} button={false} />
            {loading ? <CircularProgress/> : <PostList items={posts} /> }
        </Container>
    )
}

export default Post;