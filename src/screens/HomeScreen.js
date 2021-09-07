import React from 'react'
import "./HomeScreen.css"
import Banner from '../Banner'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../Requests'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row 
                title= "NETFLIX ORIGINALS"
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title= "Top rated" fetchUrl = {requests.fetchNetflixOriginals}/>
            <Row title= "Top rated" fetchUrl = {requests.fetchTopRated}/>
            <Row title="Up Coming" fetchUrl={requests.fetchUpcoming}/>
            
        </div>
    )
}

export default HomeScreen;
