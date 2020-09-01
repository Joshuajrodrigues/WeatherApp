import axios from "axios"
const URL ="https://api.openweathermap.org/data/2.5/weather"
const key ="ecf1abaf3866cee7f361ba480f17a4ca"
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:key
        }
    })
    return data
}
