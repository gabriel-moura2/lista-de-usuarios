import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarLabel, TaskList } from "../components";

const TaskPage = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
        .then(resposta => resposta.json())
        .then(json => {
            setTasks(json);
            setLoading(false);
        })
    })

    return (
        <Container>
            <AppBarLabel label='Lista de Usuários' button={true} />
            {loading ? <CircularProgress/> : <TaskList items={tasks} /> }
        </Container>
    )
}

export default TaskPage;