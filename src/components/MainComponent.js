import React, { Component } from 'react';
import SearchLocation from './SearchLocation';
import CurrentWeather from './CurrentWeather';
import FiveDaysForecast from './FiveDaysForecast';
import '../App.css';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentWeatherText: 'text',
        selectedLoc: 'Tel Aviv',
        selectedKey: '215854',
        addRemove: "Add To Favorites",
        fav1: {loc: "", key: ""},
        fav2: {loc: "", key: ""},
        fav3: {loc: "", key: ""},
        fav4: {loc: "", key: ""},
        fav5: {loc: "", key: ""},
    };

      }

    change=(t)=>{
        this.setState({currentWeatherText: t})
      }    

      selected = async (sL,sK)=>{
        await  this.setState({selectedLoc: sL,
        selectedKey: sK
        })
        if(sL === this.state.fav1.loc || sL === this.state.fav2.loc || 
            sL === this.state.fav3.loc || sL === this.state.fav4.loc || 
            sL === this.state.fav5.loc){
            this.setState(()=>({
                addRemove: " Remove From Favorites"
            }))
        } else {
            this.setState(()=>({
                addRemove: " Add To Favorites"
            }))
        }
      }


      async componentDidMount(){

        await  this.setState(()=>({
            selectedLoc: this.props.selectedLoc,
            selectedKey: this.props.selectedKey
        }))

        if(this.props.favsUpdatedArr[0] === undefined){

        } else if(this.props.favsUpdatedArr[0].loc === "" && this.props.favsUpdatedArr[1].loc === "" &&
        this.props.favsUpdatedArr[2].loc === "" && this.props.favsUpdatedArr[3].loc === "" && 
        this.props.favsUpdatedArr[4].loc === ""){

        } else if(this.props.favsUpdatedArr[0].loc === this.state.selectedLoc){
            await this.setState(()=>({
                addRemove: " Remove From Favorites",
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            })) 
        } else if(this.props.favsUpdatedArr[1].loc === this.state.selectedLoc){
            await this.setState(()=>({
                addRemove: " Remove From Favorites",
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            }))
         } else if(this.props.favsUpdatedArr[2].loc === this.state.selectedLoc){
            await this.setState(()=>({
                addRemove: " Remove From Favorites",
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            }))
         } else if(this.props.favsUpdatedArr[3].loc === this.state.selectedLoc){
            await this.setState(()=>({
                addRemove: " Remove From Favorites",
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            }))
         } else if(this.props.favsUpdatedArr[4].loc === this.state.selectedLoc){
            await this.setState(()=>({
                addRemove: " Remove From Favorites",
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            }))
         } else {
            await this.setState(()=>({
                fav1: {loc: this.props.favsUpdatedArr[0].loc, key: this.props.favsUpdatedArr[0].key},
                fav2: {loc: this.props.favsUpdatedArr[1].loc, key: this.props.favsUpdatedArr[1].key},
                fav3: {loc: this.props.favsUpdatedArr[2].loc, key: this.props.favsUpdatedArr[2].key},
                fav4: {loc: this.props.favsUpdatedArr[3].loc, key: this.props.favsUpdatedArr[3].key},
                fav5: {loc: this.props.favsUpdatedArr[4].loc, key: this.props.favsUpdatedArr[4].key},
            }))

         }
            
      }

      onClick=async()=>{
        if(this.state.fav1.loc === this.state.selectedLoc){
            await this.setState(()=>({
                fav1: {loc: "", key: ""},
                addRemove: " Add To Favorites"
                
            }))
            } else if(this.state.fav2.loc === this.state.selectedLoc){
                await this.setState(()=>({
                    fav2: {loc: "", key: ""},
                    addRemove: " Add To Favorites"
                }))
                } else if(this.state.fav3.loc === this.state.selectedLoc){
                    await this.setState(()=>({
                        fav3: {loc: "", key: ""},
                        addRemove: " Add To Favorites"
                    }))
                    } else if(this.state.fav4.loc === this.state.selectedLoc){
                        await   this.setState(()=>({
                            fav4: {loc: "", key: ""},
                            addRemove: " Add To Favorites"
                        }))
                        } else if(this.state.fav5.loc === this.state.selectedLoc){
                            await   this.setState(()=>({
                                fav5: {loc: "", key: ""},
                                addRemove: " Add To Favorites"
                            }))
                            } else if(this.state.fav1.loc !== "" && this.state.fav2.loc !== "" &&
                            await this.state.fav3.loc !== "" && this.state.fav4.loc !== "" && this.state.fav5.loc !== ""){
                                alert("There is 5 favorites already")
                            } else if (this.state.fav1.loc === ""){
                                await    this.setState(()=>({
                                    fav1:{loc: this.state.selectedLoc, key: this.state.selectedKey},
                                    addRemove: " Remove From Favorites"
                                }))
                            } else if (this.state.fav2.loc === ""){
                                await  this.setState(()=>({
                                    fav2: {loc: this.state.selectedLoc, key: this.state.selectedKey},
                                    addRemove: " Remove From Favorites"
                                }))
                            } else if (this.state.fav3.loc === ""){
                                await  this.setState(()=>({
                                    fav3: {loc: this.state.selectedLoc, key: this.state.selectedKey},
                                    addRemove: " Remove From Favorites"
                                }))
                            } else if (this.state.fav4.loc === ""){
                                await  this.setState(()=>({
                                    fav4: {loc: this.state.selectedLoc, key: this.state.selectedKey},
                                    addRemove: " Remove From Favorites"
                                }))
                            } else if (this.state.fav5.loc === ""){
                                await  this.setState(()=>({
                                    fav5: {loc: this.state.selectedLoc, key: this.state.selectedKey},
                                    addRemove: " Remove From Favorites"
                                }))
                            }
            let favsArr=[this.state.fav1,this.state.fav2,this.state.fav3,this.state.fav4,this.state.fav5];
            
        this.props.select(favsArr);
      }


    render() {
        return (
            <div className="container">

                <div className="row">
                <div className="col-2"></div>
                    <div className="col-8">
                <form id="d1">
                <SearchLocation selectedLoc={this.selected}/>
                </form>
                </div>
                <div className="col-2"></div>
                </div>

                <div className="row">
                    <div className="d2">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div id="current">
                            <CurrentWeather currentWeatherText={this.change} selectedLoc={this.state.selectedLoc} selectedKey={this.state.selectedKey} />
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 col-sm-12" id="addToFav" onClick={this.onClick}>
                        <span className="fa fa-gratipay fa-lg"></span> {this.state.addRemove}
                        </div>
                    </div>


                <div className="row">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                    <div id="current">
                    <h1>{this.state.currentWeatherText}</h1>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-12"></div>
                </div>

                <div className="row">
                <FiveDaysForecast selectedKey={this.state.selectedKey}/>
                </div>
                    </div>
                </div>
            </div>
        )
    }
}
