import './App.css';
//import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';


//npm instal axios

function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setselectedPunk] = useState(0);

 useEffect(() => {
  const getMyNfts = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x6F8838d32692Be56070774687Dd10c4Dd1fb72C6'
      )
    console.log(openseaData.data.assets)
    setpunkListData(openseaData.data.assets)
  }
   getMyNfts(); 
}, [])


 return(
  <div className='app'>
    <Header />
     {punkListData.length > 0 && (
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <Punklist 
           punkListData={punkListData} 
           setselectedPunk={setselectedPunk}/>
      </>
      )}    
  </div>
  );
}

export default App;
