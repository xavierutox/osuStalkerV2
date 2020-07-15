import React, {Component} from "react"

import "../styles/App.css"
import "../styles/UserData.css"

const imageLink = "https://a.ppy.sh/"
const countryFlag = "https://osu.ppy.sh/images/flags/"

const countries = {
    "CL": "Chile",
    "US": "United States",
    "AU": "Australia",
    "BR": "Brazil",
    "KR": "South Korea",
    "JP": "Japan",
    "RU": "Russia",
    "EC": "Ecuador",
    "AR": "Argentina",
    "TW": "Taiwan",
    "DE": "Germany",
    "PL": "Poland",
    "FR": "France",
    "CA": "Canada",
    "GB": "United Kingdom",
    "CN": "China",
    "ID": "Indonesia",
    "UA": "Ukraine",
    "PH": "Philippines",
    "FI": "Finland",
    "NL": "Netherlands",
    "SE": "Sweden",
    "SG": "Singapore",
    "MX": "Mexico",
    "MY": "Malaysia",
    "ES": "Spain",
    "IT": "Italy",
    "HK": "Hong Kong",
    "TH": "Thailand",
    "VN": "Vietnam",
    "NO": "Norway",
    "CZ": "Czech Republic",
    "TR": "Turkey",
    "BY": "Belarus",
    "AT": "Austria",
    "BE": "Belgium",
    "PT": "Portugal",
    "RO": "Romania",
    "DK": "Denmark",
    "HU": "Hungary",
    "LT": "Lithuania",
    "KZ": "Kazakhstan",
    "NZ": "New Zealand",
    "PE": "Peru",
    "CH": "Switzerland",
    "CO": "Colombia",
    "IL": "Israel",
    "EE": "Estonia",
    "BG": "Bulgaria",
    "SK": "Slovakia",
    "GR": "Greece",
    "LV": "Latvia",
    "VE": "Venezuela",
    "RS": "Serbia",
    "IE": "Ireland",
    "HR": "Croatia",
    "SA": "Saudi Arabia",
    "UY": "Uruguay",
    "ZA": "South Africa",
    "AE": "United Arab Emirates",
    "SI": "Slovenia",
    "IN": "India",
    "MA": "Morocco",
    "CR": "Costa Rica",
    "MD": "Moldova",
    "DO": "Dominican Republic",
    "BN": "Brunei",
    "EG": "Egypt",
    "RE": "Reunion",
    "TN": "Tunisia",
    "MO": "Macau",
    "PA": "Panama",
    "DZ": "Algeria",
    "MN": "Mongolia",
    "PY": "Paraguay",
    "KW": "Kuwait",
    "PR": "Puerto Rico",
    "BO": "Bolivia",
    "GE": "Georgia",
    "SV": "El Salvador",
    "QA": "Qatar",
    "GT": "Guatemala",
    "LU": "Luxembourg",
    "KG": "Kyrgyzstan",
    "UZ": "Uzbekistan",
    "MK": "The Former Yugoslav Republic of Macedonia",
    "KH": "Cambodia",
    "IS": "Iceland",
    "BA": "Bosnia and Herzegovina",
    "JO": "Jordan",
    "PK": "Pakistan",
    "HN": "Honduras",
    "CY": "Cyprus",
    "TT": "Trinidad and Tobago",
    "NI": "Nicaragua",
    "MV": "Maldives",
    "BH": "Bahrain",
    "PF": "French Polynesia",
    "BD": "Bangladesh",
    "LB": "Lebanon",
    "IQ": "Iraq",
    "GU": "Guam",
    "AZ": "Azerbaijan",
    "NP": "Nepal",
    "AL": "Albania",
    "MT": "Malta",
    "MM": "Myanmar",
    "OM": "Oman",
    "NC": "New Caledonia",
    "IR": "Islamic Republic of Iran",
    "AM": "Armenia",
    "GP": "Guadeloupe",
    "MQ": "Martinique",
    "JM": "Jamaica",
    "LA": "Lao People's Democratic Republic",
    "MU": "Mauritius",
    "LK": "Sri Lanka",
    "PS": "Palestinian Territory Ocuppied",
    "FO": "Faroe Islands",
    "SY": "Syrian Arab Republic",
    "JE": "Jersey",
    "ME": "Montenegro",
    "GF": "French Guiana",
    "IM": "Isle of Man",
    "SR": "Suriname",
    "MP": "Northern Mariana Islands",
    "BB": "Barbados",
    "BZ": "Belize",
    "LY": "Libya",
    "AX": "Aland Islands",
    "AW": "Aruba",
    "SD": "Sudan",
    "GG": "Guernsey",
    "MG": "Madagascar",
    "LI": "Liechtenstein",
    "BS": "Bahamas",
    "KE": "Kenya",
    "GL": "Greenland",
    "BM": "Bermuda",
    "CI": "Cote D'Ivoire",
    "EU": "Europe",
    "GY": "Guyana",
    "AD": "Andorra",
    "GI": "Gibraltar",
    "VI": "U.S. Virgin Islands",
    "LC": "Saint Lucia",
    "TJ": "Tajikistan",
    "AG": "Antigua and Barbuda",
    "PM": "Saint Pierre and Miquelon",
    "SN": "Senegal",
    "CK": "Cook Islands",
    "AQ": "Antarctica",
    "CF": "Central African Republic",
    "LR": "Liberia",
    "ER": "Eritrea"
}

export default class UserData extends Component {
    render() {
        const data = this.props.info
        const userImage = imageLink + data["user_id"] + "?.jpeg"
        const flagImage = countryFlag + data["country"] + ".png"
        const userName = data["username"]
        const globalRank = parseInt(data["pp_rank"], 10).toLocaleString("en-US")
        const countryRank = parseInt(data["pp_country_rank"], 10).toLocaleString("en-US")
        const totalPP = parseInt(Math.round(data["pp_raw"]), 10).toLocaleString("en-US")
        const rankedScore = parseInt(data["ranked_score"], 10).toLocaleString("en-US")
        const hitAcc = parseFloat(data["accuracy"], 10).toFixed(2)
        const playCount = parseInt(data["playcount"], 10).toLocaleString("en-US")
        const totalScore = parseInt(data["total_score"], 10).toLocaleString("en-US")
        const playTimeD = parseInt(data["total_seconds_played"]) / 86400
        const playTimeH = (playTimeD - Math.floor(playTimeD)) * 24
        const playTimeM = (playTimeH - Math.floor(playTimeH)) * 60
        const playerLevel = Math.floor(parseInt(data["level"], 10))
        const joinDate = data["join_date"]
        return (
            <div>
                <div className="UserDisplay">
                    <div className="UserImage">
                        <img src={userImage} alt="User Avatar" />
                    </div>
                    <div className="Slice1">
                        <span className="LargeText">{userName}</span>
                        <span><img src={flagImage} alt={countries[data["country"]]} /> {countries[data["country"]]} </span>
                    </div>
                    <div className="Slice2">
                        <div id="Top">
                            <span className="MidTitle">Global Ranking</span>
                            <span className="LargeText">#{globalRank}</span>
                        </div>
                        <div id="Bottom">
                            <div id="Left">
                                <span className="MidTitle">Country</span>
                                <span className="MidText">#{countryRank}</span>
                            </div>
                            <div id="Right">
                                <span className="MidTitle">pp</span>
                                <span className="MidText">{totalPP}</span>
                            </div>
                        </div>
                    </div>
                    <div className="Slice3">
                        <span className="SmallText">Ranked Score</span>
                        <span className="SmallText">Hit Accuracy</span>
                        <span className="SmallText">Play Count</span>
                        <span className="SmallText">Total Score</span>
                        <span className="SmallText">Total Play Time</span>
                        <span className="SmallText">Player Level</span>
                        <span className="SmallText">Join Date</span>
                    </div>
                    <div className="Slice4">
                    <span className="SmallText">{rankedScore}</span>
                    <span className="SmallText">{hitAcc}%</span>
                    <span className="SmallText">{playCount}</span>
                    <span className="SmallText">{totalScore}</span>
                    <span className="SmallText">{Math.floor(playTimeD)}d {Math.floor(playTimeH)}h {Math.floor(playTimeM)}m</span>
                    <span className="SmallText">{playerLevel}</span>
                    <span className="SmallText">{joinDate}</span>
                    </div>
                </div>
            </div>
        )
    }
}