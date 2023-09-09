import { useState , useEffect, useReducer } from 'react'
import Header from './components/Header'
import Mainboard from './components/Mainboard'
import { styled } from 'styled-components'
import unsplash from './api/unsplash'

function App() {

  const [pins , setNewPins] = useState([])

  const getPhotos = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos' , {
      params : {
        query : term
      }
    }) 
  }

  const onSearchSubmit = (term) => {
    getPhotos(term).then((response) => {
      let results = response.data.results;


      let newPins = [
        ...results 
        // ...pins,
      ]

      newPins.sort(function(a , b) {
        return 0.5 - Math.random();
      });

      setNewPins(newPins);
    })
  }

  const getNewPins = () => {
    let promises = [];
    let pinData = []

    let pins = ['ocean' , 'beach' , 'cats' , 'dogs']

    pins.forEach((pinTerm) => {
      promises.push(
        getPhotos(pinTerm).then((response) => {
          let results = response.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a , b) {
            return 0.5 - Math.random();
          })
        })
      )
    })

    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  }

  useEffect(() => {
    getNewPins()
  }, [])


  return (
  <>
    <Header onSubmit = {onSearchSubmit} />
    <Mainboard pins = {pins}/>
  </>


  )
}



export default App
