import { CircularProgress, Container, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarLabel, TaskList } from "../components";
import CommentIcon from '@mui/icons-material/Comment';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('Lista de Tarefas');
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
        .then(resposta => resposta.json())
        .then(json => {
            setTasks(json);
            setLoading(false);
        })
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then(resposta => resposta.json())
        .then(json => { setUser(json.name); })
    })

    const button = (
        <IconButton>
            <CommentIcon />
        </IconButton>
    )

    return (
        <Container>
            <AppBarLabel label={user} button={button} />
            {loading ? <CircularProgress/> : <TaskList items={tasks} /> }
        </Container>
    )
}

export default TaskPage;