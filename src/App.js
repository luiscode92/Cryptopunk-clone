import { Header } from './Header/Header'
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { PunkList } from './PunkList/PunkList';
import { Main } from './Main/Main';

function App() {

  const [punkListData, setPunkistData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
 
  useEffect(() => {
     const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xC6a99eE58f9E1568A6F581A21D0A3594a99Fae72'
      )
      setPunkistData(openseaData.data.assets)
     }

     getMyNfts()

  }, [])

  const newPunkList = []
  punkListData.forEach(element => {
      newPunkList.unshift(element)});

  return (
    <div className='app'>
        <Header/>
        {punkListData.length > 0 && (
          <>
            <Main selectedPunk={selectedPunk} punkListData={newPunkList} />
            <PunkList punkListData={newPunkList} setSelectedPunk={setSelectedPunk} />
          </>
        )}
       
      
    </div>
  );
}

export default App;
