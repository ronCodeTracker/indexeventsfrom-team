
import {useState} from 'react'
import './App.css';
import Topofpage from './components/Topofpage'
import Buttonsection from './components/Buttonsection'
import Cardsection from './components/Cardsection'
import Grid from '@mui/material/Grid';
import Formfordata from './components/Formfordata';
//import { Grid } from '@material-ui/core/Grid'

function App() {

    let [cardData, setCardData] = useState([{name: 'Joe Webbar', date: 'May 25, 2022'}])

    const handleData = (e, term) => {
        e.preventDefault()
        //setCardData(...term)
        /*setCardData(cardData => [...cardData, term])*/
        setCardData([...cardData, term]);
        console.log(cardData + 'appjs')
        console.log(term.name + ' term')
        console.log(term.date + ' term2')
    }

    //const addview = () => {
    //    cardData.map((nameItem, i) => {
    //        console.log('cardData ' + nameItem)
    //        return (
    //            <Grid sx={{ backgroundColor: 'blue' }} item md={4}>

    //                <Cardsection key={i} cardData={nameItem} />
    //            </Grid>
    //        )

    //    })
    //}

  return (
    <div className="App">
          <Topofpage />
          <Buttonsection />
          <Formfordata handleData={handleData}/>
          <div className="marginOne">
              <Grid container spacing={10}>
                  {
                      cardData.map((nameItem, i) => {
                          console.log('cardData ' + nameItem)
                          return (
                              <Grid sx={{ backgroundColor: 'blue' }} item md={4} key={i}>

                                  <Cardsection key={i} name={nameItem.name} date={nameItem.date} />
                              </Grid>
                          )

                      })
                  }


              {/*<Grid sx={{ backgroundColor: 'red' }} item md={4}>*/}
                  
              {/*        <Cardsection cardData={cardData[0]}/>*/}
              {/*</Grid>*/}
              {/*    {addview(cardData)}*/}
              {/*<Grid sx={{ backgroundColor: 'azure' }} item md={4}>*/}

              {/*        <Cardsection cardData={cardData[1]} />*/}
              {/*</Grid>*/}
              </Grid>
          </div>
          {console.log(cardData + 'appjs2')}
    </div>
  );
}

export default App;
