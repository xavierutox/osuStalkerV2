import React, {Component} from "react"

import UserData from "../components/UserData.js"
import UserBest from "../components/UserBest.js"

import "../styles/App.css"

const apiLink = "https://osu.ppy.sh/api/"
const userBest = 'get_user_best?'
const userData = "get_user?"
const apiKey = 'k=[apikey]'

const axios = require("axios")

export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: "Catulus",
            gamemode: 1,
            playerData: null,
            playerBest: null,
            key: "1"
        }
        this.nameChange = this.nameChange.bind(this)
        this.modeChange = this.modeChange.bind(this)
        this.fetchAPI = this.fetchAPI.bind(this)
        this.fetchUser = this.fetchUser.bind(this)
        this.fetchBest = this.fetchBest.bind(this)
    }

    nameChange(event) {
        console.log("New username: " + event.target.value)
        this.setState({playerName: event.target.value})
    }

    modeChange(event) {
        console.log("New gamemode: " + event.target.value)
        this.setState({gamemode: event.target.value})
    }

    fetchAPI(event) {
        event.preventDefault()
        this.fetchUser().then(result => {
            console.log(result.data[0])
            this.setState({
                playerData: result.data[0],
            })
        })
        this.fetchBest().then(result => {
            console.log(result.data)
            this.setState({
                playerBest: result.data
            })
            if (this.state.key === "0") this.setState({key: "1"})
            else this.setState({key: "0"})
            console.log("New key: " + this.state.key)
        })
    }

    fetchUser() {
        console.log("API call: Fetch user data")
        const userUrl = apiLink + userData + apiKey + "&u=" + this.state.playerName + "&m=" + this.state.gamemode + "&type=string"
        return axios.get(userUrl)
    }

    fetchBest() {
        console.log("API call: Fetch player best plays")
        const bestUrl = apiLink + userBest + apiKey + "&u=" + this.state.playerName + "&limit=10&m=" + this.state.gamemode + "&type=string"
        return axios.get(bestUrl)
    }

    makeBestPlays() {
        return <div key={this.state.key}>
            <UserBest info={this.state.playerBest[0]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[1]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[2]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[3]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[4]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[5]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[6]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[7]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[8]} mode={this.state.gamemode} />
            <UserBest info={this.state.playerBest[9]} mode={this.state.gamemode} />
        </div>
    }

    render() {
        return (
            <div>
                <div className="Subtitle">
                    <form onSubmit={this.fetchAPI} style={{position: "relative", width: "100%"}}>
                        <span style={{margin: "auto auto auto 0"}}>Search by player</span>
                        <span className="fas fa-search"></span>
                        <input name="username" type="text" placeholder="username" defaultValue={this.state.playerName} onChange={this.nameChange}/>
                        <select name="mode" defaultValue= "1" onChange={this.modeChange}>
                            <option value="0">osu!</option>
                            <option value="1">osu!taiko</option>
                            <option value="2">osu!catch</option>
                            <option value="3">osu!mania</option>
                        </select>
                        <input type="submit" value="Search" id="SubmitButton" />
                    </form>
                </div>
                {this.state.playerData ?
                    <UserData info={this.state.playerData} /> :
                    <div />
                }
                {this.state.playerBest ?
                    <div>
                        <span className="Subtitle">Best Performance</span>
                        {this.makeBestPlays()}
                    </div>:
                    <div />
                }
            </div>
        )
    }
}
