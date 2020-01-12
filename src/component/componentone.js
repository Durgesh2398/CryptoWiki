import React,{Component} from 'react';
class ComponentOne extends Component{
    render(){
        return(
            <div><center>
                <h1>Crypto Wiki</h1>
                <input type="text" placeholder="Enter the Crypto Currency Name"></input>
                <input type="button" value="Get Info About Coin"></input>
                <div>
                    Search For a Coin
                </div>
                </center>
            </div>
        )
    }
}

export default ComponentOne;