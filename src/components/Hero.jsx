import React from 'react'
import Button from 'react-bootstrap/Button';
// import { useParams } from 'react-router-dom'

export default function Hero() {

    const heroStyle = {backgroundColor: "rgb(119, 136, 153)", height: "50vh" }

    return (
        <div>
            <div style={ heroStyle }>
                Wing Hang Song
            </div>
            <div>
                Front End Devloper
            </div>
            <Button variant="outline-dark"><a href="https://www.linkedin.com/in/winghangsong/">Contact Me!</a> </Button>
        </div>
    )
}
