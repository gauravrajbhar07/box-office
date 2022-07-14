import React from 'react'
import { Link } from 'react-router-dom';
const LINKS = [
    { to: '/', text: 'home' },
    { to: '/starred', text: 'starred' }
]



const Navs = () => {
    return (
        <div>
            <ul>
                {

                    LINKS.map(item => <li key={item.key}><Link to={item.to} >{item.text}</Link></li>)}

            </ul>
        </div>
    )
}

export default Navs