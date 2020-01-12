import React,{Component} from 'react';
class ComponentTwo extends Component{
    render(){
        return(
            <center><div>
                <h1>Crypto Wiki</h1>
                <input type="text" placeholder="Enter the Crypto Currency Name"></input>
                <input type="button" value="Get Info About Coin"></input>
                <div>
                    Search For a Coin
                </div>
            </div></center>
        )
    }
}

export default ComponentTwo;