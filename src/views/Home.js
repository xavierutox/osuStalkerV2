import React, {Component} from "react"

import "../styles/App.css"
import "../styles/Home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="Main">
                <span><span className="Title">Welcome!</span></span>
                <span>Start your search by heading to the 'player' section on the navigation menu.</span>
                <span className="SubTitle"><span id="Content">About</span></span>
                <span>This page allows you to check any player's most important information, including pp, ranking, and best plays.</span>
            </div>
        )
    }
}