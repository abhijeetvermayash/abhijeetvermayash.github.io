import React from 'react';
import Dialog from './Dialog';

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showdialog: false};


    }
    render() {

        return (

            <div class="ui card" style={{ marginTop: '100px', float: 'left', marginLeft: '50px' }}>
                <div class="image">
                    <img src={this.props.image} />
                </div>
                <div class="content">
                    <a class="header">{this.props.header}</a>
                    <div class="meta">
                        <span >{this.props.model}</span>
                    </div>
                    <div class="description">
                        {this.props.about}
                    </div>
                </div>
                <div class="extra content">
                    <a>

                        <h3>{this.props.votes} Votes<button style={{ marginLeft: '50px' }} className="ui green button" onClick={this.Dialog}>Vote</button></h3></a></div>
                <Dialog showdialog={this.state.showdialog} />
            </div>);
    }


                
             
                
           
                
                



      
    Dialog = (event) => {
        event.preventDefault();
        console.log(13131);
       
        const a = this.props.votes + 1;
        this.setState({ showdialog: true });
        //this.props.onDone(this.state.showstate);
        this.props.onDone(a);
    }
}



export default Cars;
