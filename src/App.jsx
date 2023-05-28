import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './assets/global.css'
import styles from './App.module.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author="Gabriel Rio" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nam soluta fuga dolorum atque quis est impedit quos labore eaque minima ipsa eveniet reiciendis, voluptatibus incidunt quibusdam iure blanditiis sapiente."
        />
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nam soluta fuga dolorum atque quis est impedit quos labore eaque minima ipsa eveniet reiciendis, voluptatibus incidunt quibusdam iure blanditiis sapiente."
        />
      </main>
     </div>
    </>
  )
}

