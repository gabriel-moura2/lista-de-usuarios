import { CircularProgress, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import './App.css'

function App() {
  const [user, setUser] = useState([{}]);
  const [loading, setLoading] = useState(true);

  function Row(props: ListChildComponentProps) {
    const { index, style } = props;

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then(resposta => resposta.json())
        .then(json => {
          setUser(json)
          setLoading(false)
        })
    })
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={user[index].name} />
        </ListItemButton>
      </ListItem>
    );
  }
  

  return (
    <div>
      {loading ? <CircularProgress/> : null}
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
    </div>
  );
}

export default App
