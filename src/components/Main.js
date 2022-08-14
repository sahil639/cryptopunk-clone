import React, {useEffect, useState} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setactivePunk] = useState(punkListData[0])

    useEffect(() => {  
        setactivePunk(punkListData[selectedPunk])
    } , [punkListData, selectedPunk])


//     <div className='main'>
//         <div className='mainContent'>
//             <div className='punkHighlight'>
//                 <div className='punkContainer'>
//                     <img
//                       className='selectedPunk'
//                       src={activePunk.image_original_url}
//                       alt=''
//                       />
//                    </div>
//                  </div>

//                     <div className='punkDetails' style={{color: '#ffffff'}}>
//                         <div className='title'>{activePunk.name}</div>
//                         <span className='itemNumber'>.#{activePunk.token_id}</span>
//                     </div>
//                     <div className='owner'>
//                         <div className='ownerImageContainer'>
//                             <img
//                             src='https://gateway.thirdweb.dev/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'
//                                 alt=''/>
//                         </div>
//                         <div className='ownerDetails'>
//                             <div className='ownerNameandHandle'>
//                                 <div>{activePunk.owner.address}</div>
//                                 <div className='ownerHandle'>@quminsoda</div>
//                             </div>
//                             <div className='ownerSocial'>
//                             <div className='ownerLink'>
//                                 <img src={instagramLogo} alt='' />
//                             </div>
//                             <div className='ownerLink'>
//                                 <img src={twitterLogo} alt='' />
//                             </div>
//                             <div className='ownerLink'>
//                                 <img src={moreIcon} alt='' />
//                             </div>
//                             </div>
//                         </div>
//                       </div>
//               </div>
//             </div>
//   )
// }
return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: '#fff' }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">•#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <a href='https://testnets.opensea.io/0x3cF787C444FD3C8511B326e8b9D6f9B5558B3A5A'>
                <div className="ownerHandle">@quminsoda</div></a>
              </div>
              <a href='https://www.instagram.com/sahil.pednekar/'>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />              
              </div></a>
              <a href='https://twitter.com/sahil_pednekar3'>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" /> 
              </div></a>
              <a href='https://sahil.framer.website/'>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />            
              </div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main