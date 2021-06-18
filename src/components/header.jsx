import React from 'react';

class Header extends React.Component{
    render(){
        console.log("props=>",this.props)
        return(
            <div>
                <h1>header {this.props.page}</h1> 
            </div>
        )
    }
}

class Logo extends React.Component{
    render(){
        return(
            <div>
                <h1>logo</h1>
            </div>
        )
    }
}


export{
    Header,
    Logo,
}