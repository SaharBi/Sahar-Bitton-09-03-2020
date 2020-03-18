import React, { Component } from 'react';
import '../App.css'

export default class CurrentWeather extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        wLocation:"Tel Aviv",
        wText: "",
        wIcon: "02",
        wC: "",
        selectedLoc: "Tel Aviv"
    };
  }

  async onchange(){
      this.setState(()=>({
          selectedLoc: this.props.selectedLoc
      }))
      const locName = this.props.selectedLoc;
      const keyNum = this.props.selectedKey;
        const url = `https://dataservice.accuweather.com/currentconditions/v1/${keyNum}?apikey=lh3Nb8d2Q2yX2UTz0aZLRw7OYuleQc1f&details=${locName}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    const w = data[0].WeatherIcon;
    if( w<10){
        const newW = "0"+w;
        this.setState(()=>({
            wText: data[0].WeatherText,
            wIcon: newW,
            wC: data[0].Temperature.Metric.Value+"°",
            wLocation: this.props.selectedLoc
        }))
    }else {
        this.setState(() => ({
         wText: data[0].WeatherText,
         wIcon: w,
         wC: data[0].Temperature.Metric.Value+"°",
         wLocation: this.props.selectedLoc
     }))
  }
  this.props.currentWeatherText(data[0].WeatherText)
}
  

   async componentDidMount() {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=lh3Nb8d2Q2yX2UTz0aZLRw7OYuleQc1f&details=Tel%20Aviv`;
    const api_call = await fetch(url);
    const data = await api_call.json();

      const w = data[0].WeatherIcon;
        if(w<10){
            const newW = "0"+w;
            this.setState(() => ({
                wText: data[0].WeatherText,
                wIcon: newW,
                wC: data[0].Temperature.Metric.Value+"°",
            }))
        } else {
       this.setState(() => ({
        wText: data[0].WeatherText,
        wIcon: w,
        wC: data[0].Temperature.Metric.Value+"°",
    }))
    }
    this.props.currentWeatherText(data[0].WeatherText)
   }

  render() {

    if(this.props.selectedLoc !== this.state.selectedLoc){
         this.onchange();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.wIcon}-s.png`}
            alt="Weather Icon" /> 
                </div>
                <div className="col-8">
                <h4>{this.state.wLocation}</h4>
            {this.state.wC}
                </div>
            </div>
        </div>
    );
  }
}