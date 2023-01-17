import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'


import './App.css'

function App() {
  const catListToDisplay = useSelector(state => state.cats.cats)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch])

  console.log(catListToDisplay)
  return (
    <div className="App">
      <h1>Cat Species Gallery</h1>
      <p>Images of different cat species. Lots of cats for your view pleasure</p>
      <div className="Gallery">
        {catListToDisplay.map(cat =>
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                height="200"
                width="200"
              />
            </div>
            <div className="column column-right">
             <h2>{cat.name}</h2>
             <h5>Temperament: {cat.temperament}</h5>
             <p>{cat.description}</p>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default App
