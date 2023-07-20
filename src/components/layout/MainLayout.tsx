import React from 'react'
import { Link } from '../../../node_modules/react-router-dom/dist/index'
import "./MainLayout.css"

interface Layout {
  children?: React.ReactElement
}

const MainLayout: React.FC<Layout> = (props) => {
  return (
    <div id='container'>
      <header>
        <nav>
          <h2><Link to={'/'}>JSON Placeholder Feed</Link></h2>
        </nav>
      </header>
      <main>
        <div className='main-content'>
          {props.children}
        </div>
      </main>
      <footer>
        <strong>JSON Placeholder Feed</strong>
        <p>&copy;Copyright {new Date().getFullYear()}</p>
        <code>Test Powered by Digit-AD</code>
      </footer>
    </div>
  )
}

export default MainLayout;
