import React, { FC, useState } from 'react'
import 'normalize.css'
import './App.scss'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'

import Counter from './Counter'

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Counter name="dog" icon={<i className="fas fa-dog"></i>} />
      <Counter name="cat" icon={<i className="fas fa-cat"></i>} />
      <Counter name="fox" />
    </div>
  )
}

export default App
