import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title={"BOX OFFICE"} subtitle="Are you looking for a movie of an actor?" />
            <Navs />

            {children}
        </div>

    )
}

export default MainPageLayout