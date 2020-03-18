import React, { Component } from 'react'

export default class FiveDaysForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "215854",
            day1:{ dayName:"Sun", min: "1", max: "2", icon: "03"},
            day2:{ dayName:"Mon", min: "1", max: "2", icon: "03"},
            day3:{ dayName:"Tue", min: "1", max: "2", icon: "03"},
            day4:{ dayName:"Wed", min: "1", max: "2", icon: "03"},
            day5:{ dayName:"Thu", min: "1", max: "2", icon: "03"}
        };
      }

      getDate = (thisDate) => {
        const birthday = new Date(thisDate);
        const day1 = birthday.getDay();
        // Sunday - Saturday : 0 - 6
        if(day1 === 0){
            this.setState(()=>({
                day1: {dayName: "Sun", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName: "Mon", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Tue", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Wed", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Thu", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 1){
            this.setState(()=>({
                day1: {dayName: "Mon", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Tue", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Wed", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Thu", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Fri", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 2){
            this.setState(()=>({
                day1: {dayName:"Tue", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Wed", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Thu", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Fri", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Sat", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 3){
            this.setState(()=>({
                day1: {dayName:"Wed", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Thu", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Fri", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Sat", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Sun", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 4){
            this.setState(()=>({
                day1: {dayName:"Thu", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Fri", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Sat", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Sun", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Mon", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 5){
            this.setState(()=>({
                day1: {dayName:"Fri", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Sat", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Sun", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Mon", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Tue", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        } else if(day1 === 6){
            this.setState(()=>({
                day1: {dayName:"Sat", min: this.state.day1.min, max: this.state.day1.max, icon: this.state.day1.icon},
                day2: {dayName:"Sun", min: this.state.day2.min, max: this.state.day2.max, icon: this.state.day2.icon},
                day3: {dayName:"Mon", min: this.state.day3.min, max: this.state.day3.max, icon: this.state.day3.icon},
                day4: {dayName:"Tue", min: this.state.day4.min, max: this.state.day4.max, icon: this.state.day4.icon},
                day5: {dayName:"Wed", min: this.state.day5.min, max: this.state.day5.max, icon: this.state.day5.icon}
            }))
        }

      }


      async onchange() {
        this.setState(()=>({
            selectedKey: this.props.selectedKey
        }))
        const newKey = this.props.selectedKey;
        const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${newKey}?apikey=lh3Nb8d2Q2yX2UTz0aZLRw7OYuleQc1f&metric=true`;
        const api_call = await fetch(url);
        const data = await api_call.json();
        const thisDate = data.DailyForecasts[0].Date;
        this.getDate(thisDate);
        this.setState(()=>({
            day1: {dayName: this.state.day1.dayName, min: data.DailyForecasts[0].Temperature.Minimum.Value, max: data.DailyForecasts[0].Temperature.Maximum.Value, icon: data.DailyForecasts[0].Day.Icon},
            day2: {dayName: this.state.day2.dayName, min: data.DailyForecasts[1].Temperature.Minimum.Value, max: data.DailyForecasts[1].Temperature.Maximum.Value, icon: data.DailyForecasts[1].Day.Icon},
            day3: {dayName: this.state.day3.dayName, min: data.DailyForecasts[2].Temperature.Minimum.Value, max: data.DailyForecasts[2].Temperature.Maximum.Value, icon: data.DailyForecasts[2].Day.Icon},
            day4: {dayName: this.state.day4.dayName, min: data.DailyForecasts[3].Temperature.Minimum.Value, max: data.DailyForecasts[3].Temperature.Maximum.Value, icon: data.DailyForecasts[3].Day.Icon},
            day5: {dayName: this.state.day5.dayName, min: data.DailyForecasts[4].Temperature.Minimum.Value, max: data.DailyForecasts[4].Temperature.Maximum.Value, icon: data.DailyForecasts[4].Day.Icon}
        }))
        const i1 = data.DailyForecasts[0].Day.Icon;
        const i2 = data.DailyForecasts[1].Day.Icon;
        const i3 = data.DailyForecasts[2].Day.Icon;
        const i4 = data.DailyForecasts[3].Day.Icon;
        const i5 = data.DailyForecasts[4].Day.Icon;
        if(i1<10){
            const newi1 = "0"+i1;
            this.setState(()=>({
                day1: {dayName: this.state.day1.dayName, min: this.state.day1.min, max: this.state.day1.max, icon: newi1},
            }))
        }
            if(i2<10){
                const newi2 = "0"+i2;
                this.setState(()=>({
                    day2: {dayName: this.state.day2.dayName, min: this.state.day2.min, max: this.state.day2.max, icon: newi2},
                }))
      }
            if(i3<10){
                const newi3 = "0"+i3;
                this.setState(()=>({
                    day3: {dayName: this.state.day3.dayName, min: this.state.day3.min, max: this.state.day3.max, icon: newi3},
        }))
    }
            if(i4<10){
                const newi4 = "0"+i4;
                this.setState(()=>({
                    day4: {dayName: this.state.day4.dayName, min: this.state.day4.min, max: this.state.day4.max, icon: newi4},
        }))
    }
    if(i5<10){
        const newi5 = "0"+i5;
        this.setState(()=>({
            day5: {dayName: this.state.day5.dayName, min: this.state.day5.min, max: this.state.day5.max, icon: newi5},
        }))
    }
      }

      async componentDidMount(){
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=lh3Nb8d2Q2yX2UTz0aZLRw7OYuleQc1f&metric=true`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    const thisDate = data.DailyForecasts[0].Date;
    
        this.getDate(thisDate);
        this.setState(()=>({
            day1: {dayName: this.state.day1.dayName, min: data.DailyForecasts[0].Temperature.Minimum.Value, max: data.DailyForecasts[0].Temperature.Maximum.Value, icon: data.DailyForecasts[0].Day.Icon},
            day2: {dayName: this.state.day2.dayName, min: data.DailyForecasts[1].Temperature.Minimum.Value, max: data.DailyForecasts[1].Temperature.Maximum.Value, icon: data.DailyForecasts[1].Day.Icon},
            day3: {dayName: this.state.day3.dayName, min: data.DailyForecasts[2].Temperature.Minimum.Value, max: data.DailyForecasts[2].Temperature.Maximum.Value, icon: data.DailyForecasts[2].Day.Icon},
            day4: {dayName: this.state.day4.dayName, min: data.DailyForecasts[3].Temperature.Minimum.Value, max: data.DailyForecasts[3].Temperature.Maximum.Value, icon: data.DailyForecasts[3].Day.Icon},
            day5: {dayName: this.state.day5.dayName, min: data.DailyForecasts[4].Temperature.Minimum.Value, max: data.DailyForecasts[4].Temperature.Maximum.Value, icon: data.DailyForecasts[4].Day.Icon}
        }))

        const i1 = data.DailyForecasts[0].Day.Icon;
        const i2 = data.DailyForecasts[1].Day.Icon;
        const i3 = data.DailyForecasts[2].Day.Icon;
        const i4 = data.DailyForecasts[3].Day.Icon;
        const i5 = data.DailyForecasts[4].Day.Icon;
        if(i1<10){
            const newi1 = "0"+i1;
            this.setState(()=>({
                day1: {dayName: this.state.day1.dayName, min: this.state.day1.min, max: this.state.day1.max, icon: newi1},
            }))
        }
            if(i2<10){
                const newi2 = "0"+i2;
                this.setState(()=>({
                    day2: {dayName: this.state.day2.dayName, min: this.state.day2.min, max: this.state.day2.max, icon: newi2},
                }))
      }
            if(i3<10){
                const newi3 = "0"+i3;
                this.setState(()=>({
                    day3: {dayName: this.state.day3.dayName, min: this.state.day3.min, max: this.state.day3.max, icon: newi3},
        }))
    }
            if(i4<10){
                const newi4 = "0"+i4;
                this.setState(()=>({
                    day4: {dayName: this.state.day4.dayName, min: this.state.day4.min, max: this.state.day4.max, icon: newi4},
        }))
    }
    if(i5<10){
        const newi5 = "0"+i5;
        this.setState(()=>({
            day5: {dayName: this.state.day5.dayName, min: this.state.day5.min, max: this.state.day5.max, icon: newi5},
        }))
    }

    }

    render() {

        if(this.props.selectedKey !== this.state.selectedKey){
            this.onchange();
        }

        return (
            <div className="row" id="d3">
                                <div className="col-lg-1 col-md-6 col-sm-6">
                                    <br />
                                    <h5 className="cDya">Daily:</h5>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="fiveDays" style={{ backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${this.state.day1.icon}-s.png)`, backgroundRepeat  : 'no-repeat',
                                            backgroundPosition: 'center', }}>
                                    <span className="cDya">{this.state.day1.dayName}</span><br />
                                    <span className="day">{this.state.day1.max}°</span> / <span>{this.state.day1.min}°</span>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="fiveDays" style={{ backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${this.state.day2.icon}-s.png)`, backgroundRepeat  : 'no-repeat',
                                            backgroundPosition: 'center', }}>
                                    <span className="cDya">{this.state.day2.dayName}</span><br />
                                    <span className="day">{this.state.day2.max}°</span> / <span>{this.state.day2.min}°</span>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="fiveDays" style={{ backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${this.state.day3.icon}-s.png)`, backgroundRepeat  : 'no-repeat',
                                            backgroundPosition: 'center', }}>
                                    <span className="cDya">{this.state.day3.dayName}</span><br />
                                    <span className="day">{this.state.day3.max}°</span> / <span>{this.state.day3.min}°</span>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="fiveDays" style={{ backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${this.state.day4.icon}-s.png)`, backgroundRepeat  : 'no-repeat',
                                            backgroundPosition: 'center', }}>
                                    <span className="cDya">{this.state.day4.dayName}</span><br />
                                    <span className="day">{this.state.day4.max}°</span> / <span>{this.state.day4.min}°</span>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="fiveDays" style={{ backgroundImage: `url(https://developer.accuweather.com/sites/default/files/${this.state.day5.icon}-s.png)`, backgroundRepeat  : 'no-repeat',
                                            backgroundPosition: 'center', }}>
                                    <span className="cDya">{this.state.day5.dayName}</span><br />
                                    <span className="day">{this.state.day5.max}°</span> / <span>{this.state.day5.min}°</span>
                                </div>
                                </div>
            </div>
        )
    }
}
