import React from 'react'
import { Link } from '../../../node_modules/react-router-dom/dist/index'
import Shape from '../../assets/shape_49.svg'
import Ils from '../../assets/ils_21.svg'
import './ErrorBoundary.css'

export default function ErrorBoundary (): React.ReactElement {

    return (
        <div className="error-page-content">
            <div className="container">
                <div className="row">
                    <div style={{margin: '0 auto'}}>
                        <h2>Opps! you'r on the wrong place.</h2>
                        <p>Can not find what you need? Take a moment and
                            do a search below or start from our Homepage.</p>
                        <Link to="/" className="btn">Back to home</Link>
                    </div>
                </div>
                <img src={Ils} alt="" style={{width: '100%'}} />
            </div>
            <img src={Shape} alt="" className="shape-one" style={{width: '100%'}} />
        </div>
    )
}