import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react'
import { AppBarLabel, AppList } from '../components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from './Task';

function App() {
  const [users, setUsers] = useState([{name: 'gabriel'}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(resposta => resposta.json())
      .then(json => {
        setUsers(json)
        setLoading(false)
    })
  })

  return (
    <Container>
      <AppBarLabel label='Lista de Usuários' button={false} />
      {loading ? <CircularProgress/> : <AppList items={users} /> }
    </Container>
  );
}

export default App

/*



  const Row = (props: ListChildComponentProps) =>  {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={users[index].name} />
        </ListItemButton>
      </ListItem>
    );
  }

<Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={user.length}
          overscanCount={5}
        >
          {Row}
        </FixedSizeList>
      </Box>
    */