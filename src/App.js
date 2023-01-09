import { createContext, useState } from 'react';
import './App.css';
import LeftBar from './components/LeftBar';
import { Box } from '@mui/system';
import RightBar from './components/RightBar';
import Home from './components/Home';
import NewsList from './components/NewsList';
import NavBar from './components/NavBar';
export const searchInput = createContext()
function App() {
  const [userInput, setUserInput] = useState('')
  const [favorites , setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
  const [rightBar , toggleRightBar] = useState(false)
  const contextValue = { userInput, setUserInput, favorites, setFavorites, toggleRightBar , rightBar}
  const [send, setSend] = useState(false)
  localStorage.setItem('favorites' , JSON.stringify(favorites))
  return (
    <searchInput.Provider value={contextValue}>
      <Box>
        <NavBar setSend={setSend}/>
        {/* <Stack direction='row' justifyContent='space-between' spacing={2} marginTop='5%'> */}
          <LeftBar setSend={setSend}/>
          <RightBar/>
          <Box position='static' direction='column' sx={{ marginTop: { xs: '20%', sm: '7%' } }}>
          {send === true? <NewsList/>:<Home setSend={setSend}/>}
          </Box>
        {/* </Stack> */}
      </Box>
    </searchInput.Provider>
  );
}

export default App;
