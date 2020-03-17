import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        fav1: {loc: "", key: ""},
        fav2: {loc: "", key: ""},
        fav3: {loc: "", key: ""},
        fav4: {loc: "", key: ""},
        fav5: {loc: "", key: ""},
            emptyFavs: "",
            f1: {l: "", c: "", icon: "02", t: ""},
            f2: {l: "", c: "", icon: "02", t: ""},
            f3: {l: "", c: "", icon: "02", t: ""},
            f4: {l: "", c: "", icon: "02", t: ""},
            f5: {l: "", c: "", icon: "02", t: ""},
            clickedLoc: "",
            clickedKey: ""
        };
        this.c1 = this.c1.bind(this);
        this.c2 = this.c2.bind(this);
        this.c3 = this.c3.bind(this);
        this.c4 = this.c4.bind(this);
        this.c5 = this.c5.bind(this);
    }

       async componentDidMount(){

           if(this.props.favsArr[0] === undefined){
                this.setState(()=>({
                    emptyFavs: "There are no favorites locations yet"
                }))
           } else {
           await this.setState(()=>({
                fav1: {loc: this.props.favsArr[0].loc, key: this.props.favsArr[0].key},
                fav2: {loc: this.props.favsArr[1].loc, key: this.props.favsArr[1].key},
                fav3: {loc: this.props.favsArr[2].loc, key: this.props.favsArr[2].key},
                fav4: {loc: this.props.favsArr[3].loc, key: this.props.favsArr[3].key},
                fav5: {loc: this.props.favsArr[4].loc, key: this.props.favsArr[4].key},
            }))
            if(this.state.fav1.loc === "" && this.state.fav2.loc === "" && this.state.fav3.loc === "" &&
        this.state.fav4.loc === "" && this.state.fav5.loc === ""){
            this.setState(()=>({
                emptyFavs: "There are no favorites locations yet"
            }))
        } else {
             if (this.state.fav1.loc !== ""){
                const url = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.fav1.key}?apikey=jo62kbkIb69wcPvZiAIEctLE0xys9oh7&details=${this.state.fav1.loc}`;
                const api_call = await fetch(url);
                const data = await api_call.json();
                const w = data[0].WeatherIcon;
                if(w<10){
                    const newW = "0"+w;
                    this.setState(() => ({
                        f1: {l: this.state.fav1.loc, c: data[0].Temperature.Metric.Value+"°", icon: newW, t: data[0].WeatherText},
                    }))
                } else {
               this.setState(() => ({
                f1: {l: this.state.fav1.loc, c: data[0].Temperature.Metric.Value+"°", icon: w, t: data[0].WeatherText},
            }))
            }
            } if (this.state.fav2.loc !== ""){
                const url = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.fav2.key}?apikey=jo62kbkIb69wcPvZiAIEctLE0xys9oh7&details=${this.state.fav2.loc}`;
                const api_call = await fetch(url);
                const data = await api_call.json();
                const w = data[0].WeatherIcon;
                if(w<10){
                    const newW = "0"+w;
                    this.setState(() => ({
                        f2: {l: this.state.fav2.loc, c: data[0].Temperature.Metric.Value+"°", icon: newW, t: data[0].WeatherText},
                    }))
                } else {
               this.setState(() => ({
                f2: {l: this.state.fav2.loc, c: data[0].Temperature.Metric.Value+"°", icon: w, t: data[0].WeatherText},
            }))
            }
            } if (this.state.fav3.loc !== ""){
                const url = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.fav3.key}?apikey=jo62kbkIb69wcPvZiAIEctLE0xys9oh7&details=${this.state.fav3.loc}`;
                const api_call = await fetch(url);
                const data = await api_call.json();
                const w = data[0].WeatherIcon;
                if(w<10){
                    const newW = "0"+w;
                    this.setState(() => ({
                        f3: {l: this.state.fav3.loc, c: data[0].Temperature.Metric.Value+"°", icon: newW, t: data[0].WeatherText},
                    }))
                } else {
               this.setState(() => ({
                f3: {l: this.state.fav3.loc, c: data[0].Temperature.Metric.Value+"°", icon: w, t: data[0].WeatherText},
            }))
            }
            } if (this.state.fav4.loc !== ""){
                const url = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.fav4.key}?apikey=jo62kbkIb69wcPvZiAIEctLE0xys9oh7&details=${this.state.fav4.loc}`;
                const api_call = await fetch(url);
                const data = await api_call.json();
                const w = data[0].WeatherIcon;
                if(w<10){
                    const newW = "0"+w;
                    this.setState(() => ({
                        f4: {l: this.state.fav4.loc, c: data[0].Temperature.Metric.Value+"°", icon: newW, t: data[0].WeatherText},
                    }))
                } else {
               this.setState(() => ({
                f4: {l: this.state.fav4.loc, c: data[0].Temperature.Metric.Value+"°", icon: w, t: data[0].WeatherText},
            }))
            }
            } if (this.state.fav5.loc !== ""){
                const url = `http://dataservice.accuweather.com/currentconditions/v1/${this.state.fav5.key}?apikey=jo62kbkIb69wcPvZiAIEctLE0xys9oh7&details=${this.state.fav5.loc}`;
                const api_call = await fetch(url);
                const data = await api_call.json();
                const w = data[0].WeatherIcon;
                if(w<10){
                    const newW = "0"+w;
                    this.setState(() => ({
                        f5: {l: this.state.fav5.loc, c: data[0].Temperature.Metric.Value+"°", icon: newW, t: data[0].WeatherText},
                    }))
                } else {
               this.setState(() => ({
                f5: {l: this.state.fav5.loc, c: data[0].Temperature.Metric.Value+"°", icon: w, t: data[0].WeatherText},
            }))
            }
            }



        }
        } 


        let favsUpdatedArr=[this.state.fav1,this.state.fav2,this.state.fav3,this.state.fav4,this.state.fav5];
            
        this.props.update(favsUpdatedArr);
    }

    c1() {
        if(this.state.fav1.loc !== ""){
            this.props.passW(this.state.fav1.loc,this.state.fav1.key)
        }
      }

      c2() {
        if(this.state.fav2.loc !== ""){
            this.props.passW(this.state.fav2.loc,this.state.fav2.key)
        }
      }

      c3() {
        if(this.state.fav3.loc !== ""){
            this.props.passW(this.state.fav3.loc,this.state.fav3.key)
        }
      }

      c4() {
        if(this.state.fav4.loc !== ""){
            this.props.passW(this.state.fav4.loc,this.state.fav4.key)
        }
      }

      c5() {
        if(this.state.fav1.loc !== ""){
            this.props.passW(this.state.fav5.loc,this.state.fav5.key)
        }
      }

    render() {
        return (


                <div className="container">

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6" id="d4">
                        <h1>Favorites</h1>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <div className="d2">
                    <div className="row">
                        <div className="col-3"></div>
                    <h5>{this.state.emptyFavs}</h5>
                        </div>
                    <div className="row" id="d5">
                    <div className="col-lg-1 col-md-6 col-sm-6">
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <Link to={{ pathname: '/main'}}>
                                <div className="row fiveDays" onClick={this.c1}>
                                    
                                <div className="col-4">
                                   <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.f1.icon}-s.png`}
                                      alt="Weather Icon" /> 
                                     </div>
                                    <div className="col-8">
                                        <h6>{this.state.f1.l}</h6>
                                     {this.state.f1.c} <br />
                                     <span className="t">{this.state.f1.t}</span>
                                     </div>

                                </div>
                                </Link>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <Link to={{ pathname: '/main'}}>
                                <div className="row fiveDays" onClick={this.c2}>
                                    
                                <div className="col-4">
                                   <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.f2.icon}-s.png`}
                                      alt="Weather Icon" /> 
                                     </div>
                                    <div className="col-8">
                                        <h6>{this.state.f2.l}</h6>
                                     {this.state.f2.c} <br />
                                     <span className="t">{this.state.f2.t}</span>
                                     </div>

                                </div>
                                </Link>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <Link to={{ pathname: '/main'}}>
                                <div className="row fiveDays" onClick={this.c3}>
                                    
                                <div className="col-4">
                                   <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.f3.icon}-s.png`}
                                      alt="Weather Icon" /> 
                                     </div>
                                    <div className="col-8">
                                        <h6>{this.state.f3.l}</h6>
                                     {this.state.f3.c} <br />
                                     <span className="t">{this.state.f3.t}</span>
                                     </div>

                                </div>
                                </Link>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <Link to={{ pathname: '/main'}}>
                                <div className="row fiveDays" onClick={this.c4}>
                                    
                                <div className="col-4">
                                   <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.f4.icon}-s.png`}
                                      alt="Weather Icon" /> 
                                     </div>
                                    <div className="col-8">
                                        <h6>{this.state.f4.l}</h6>
                                     {this.state.f4.c} <br />
                                     <span className="t">{this.state.f4.t}</span>
                                     </div>

                                </div>
                                </Link>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                <Link to={{ pathname: '/main' }}>
                                <div className="row fiveDays" onClick={this.c5}>
                                    
                                <div className="col-4">
                                   <img className="currentImg" src={`https://developer.accuweather.com/sites/default/files/${this.state.f5.icon}-s.png`}
                                      alt="Weather Icon" /> 
                                     </div>
                                    <div className="col-8">
                                        <h6>{this.state.f5.l}</h6>
                                     {this.state.f5.c} <br />
                                     <span className="t">{this.state.f5.t}</span>
                                     </div>

                                </div>
                                </Link>
                                </div>
                    </div>
                    </div>
                </div>



        )
    }
}
