import React, {Component} from "react"

import "../styles/App.css"
import "../styles/UserBest.css"

const axios = require("axios")

function getAcc(data, mode) {
    let n50 = parseInt(data['count50'], 10)
    let n100 = parseInt(data['count100'], 10)
    let n300 = parseInt(data['count300'], 10)
    let miss = parseInt(data['countmiss'], 10)
    let katu = parseInt(data['countkatu'], 10)
    let geki = parseInt(data['countgeki'], 10)
    switch (mode) {
        default:  //osu!
            return ((50 * n50 + 100 * (n100) + 300 * (n300))/(300 * (miss + n50 + n100 + n300)) * 100).toFixed(2)
        case "0":  // osu!
            return ((50 * n50 + 100 * (n100) + 300 * (n300))/(300 * (miss + n50 + n100 + n300)) * 100).toFixed(2)
        case "1":  // osu!taiko
            return ((0.5 * (n100) + (n300))/(miss + (n100) + (n300)) * 100).toFixed(2)
        case "2": // osu!catch
            return ((n50 + n300 + n100)/(n50 + n300 + n100 + katu + miss) * 100).toFixed(2)
        case "3" : //osu!mania
            return ((50 * n50 + 100 * n100 + 200 * katu + 300 * (n300 + geki))/(300 * (miss + n50 + n100 + n300 + katu + geki)) * 100).toFixed(2)
    }
}

const ranks = {
    "SSH": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-SS-Silver.svg?3",
    "SS": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-SS.svg?3",
    "SH": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-S-Silver.svg?3",
    "S": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-S.svg?3",
    "A": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-A.svg?3",
    "B": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-B.svg?3",
    "C": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-C.svg?3",
    "D": "https://osu.ppy.sh/images/badges/score-ranks-v2019/GradeSmall-D.svg?3"
}

const apiLink = "https://osu.ppy.sh/api/"
const mapData = "get_beatmaps?"
const apiKey = "k=a79d9c01a3b012fc0c0bab91aaa7d09e8b76492b"

export default class UserBest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapName: null,
            artist: null,
            difficulty: null
        }
        this.fetchMap = this.fetchMap.bind(this)
    }

    fetchMap(id) {
        const result = apiLink + mapData + apiKey + "&b=" + id
        return axios.get(result)
    }

    componentDidMount() {
        this.fetchMap(this.props.info["beatmap_id"]).then(res => {
            console.log(res.data[0])
            this.setState({
                mapName: res.data[0].title,
                artist: res.data[0].artist,
                difficulty: res.data[0].version
            })
        })
    }

    render() {
        const data = this.props.info
        const mode = this.props.mode
        const rankImage = ranks[data["rank"]]
        const accuracy = getAcc(data, mode)
        const pp = Math.round(data["pp"])

        return (
            <div className="Score">
                <img src={rankImage} alt={data["rank"]} />
                <div className="LeftSide">
                    <span className="MapName">
                        {this.state.mapName ? 
                            this.state.mapName : 
                            <div />
                        }
                        {this.state.artist ?
                            <span className="Artist">by {this.state.artist}</span> :
                            <div />
                        }
                    </span>
                    {this.state.difficulty ? <span className="DiffName">{this.state.difficulty}</span> : <div />}
                </div>
                <span className="RightSide">{accuracy}%</span>
                <span className="ppValue">{pp}pp</span>
            </div>
        )
    }
}