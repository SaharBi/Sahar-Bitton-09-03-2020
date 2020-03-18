import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

export default class SearchLocation extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            keysArr: [],
            text: '',
            key: '215854'
        }
    }

    onClick = async () => {
        let loc = this.state.text;
        if(loc === ""){
            loc = "Tel Aviv"
        }
        const key = this.state.key;
        await this.props.selectedLoc(loc, key);
    }

    onTextChange = async (e) => {
        const value = e.target.value;
        let suggestions = [];
        let keysArr = [];
        if(value.length > 0){
            const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=lh3Nb8d2Q2yX2UTz0aZLRw7OYuleQc1f&q=${value}`;
            const api_call = await fetch(url);
            const data = await api_call.json();
         data.forEach(function(i){
            let locKey = {
                location: i.LocalizedName,
                key: i.Key
            }
            suggestions.push(i.LocalizedName);
            keysArr.push(locKey);
       })
        }


        this.setState(() => ({
            suggestions,
            keysArr: keysArr,
            text: value
        }))
    }

    selectedText(value) {
        const keysArr = this.state.keysArr;
        let theKey = "";
        keysArr.forEach(function(i){
            if(value === i.location){
                theKey = i.key;
            }
            
        })
        this.setState(() => ({
            text: value,
            suggestions: [],
            key: theKey
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    render() {
        return(
            <div>

                <input id="srch" placeholder="Tel Aviv" type="text" onChange={this.onTextChange} value={this.state.text}/>
                <Button variant="outline-warning" onClick={this.onClick}>Select</Button>
                {this.renderSuggestions()}
                <br />
            </div>
        );
    }

}