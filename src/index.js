import React from 'react';
import ReactDOM from 'react-dom';
import Cars from './Cars';
import Dialog from './Dialog';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: {
                name: "Lamborgini",
                image:"lambo.jpg",
                model: "Aventador RoadSter",
                about: "One of the best Cars of this generation.",
                votes: 0
            },
            two:
            {
                name: "Porsche",
                image: "porsche.jpg",
                model: "911 Turbo S",
                about: "Beautiful and Classy, What else you need!!",
                votes: 0

            },
            three: {
                name: "Ferrari",
                image: "ferrari.jpg",
                model: "Ferrari F8",
                about: "Wooo!!What a Car,It's Just Perfect! ",
                votes: 0
            },
            winner: '',
            result: false
            
            
        }
    }
    render() {
        return (
            <div style={{ marginTop: '100px', marginLeft: '200px' }}>
                <Cars image={this.state.one.image} header={this.state.one.name} model={this.state.one.model} about={this.state.one.about} votes={this.state.one.votes} onDone={this.getValueone} />
                <Cars image={this.state.two.image} header={this.state.two.name} model={this.state.two.model} about={this.state.two.about} votes={this.state.two.votes} onDone={this.getValuetwo} />
                <Cars image={this.state.three.image} header={this.state.three.name} model={this.state.three.model} about={this.state.three.about} votes={this.state.three.votes} onDone={this.getValuethree} />
                {/*<Dialog dis={this.state.showit}/>*/}
                <button className="ui red button" style={{ marginTop: '500px' }} onClick={this.ShowResult}>Show Result</button>
                <Winner winner={this.state.winner.large} result={this.state.result} />
            </div>

            
            );
        
    }
    
    ShowResult = (event) => {
        event.preventDefault();
        const large = Number(this.state.one.votes) > Number(this.state.two.votes) ? (Number(this.state.one.votes) > Number(this.state.three.votes) ? "one" : "three") : (Number(this.state.two.votes) > Number(this.state.three.votes) ? "two" : "three");
        this.setState({ winner: { large }, result:true });
        console.log(this.state.winner.large);

        console.log(large);
    }
    getValueone=(a)=> {
        console.log(a);
       
        this.setState({
            one: {
                name: "Lamborgini",
                image: "lambo.jpg",
                model: "Aventador RoadSter",
                about: "One of the best Cars of this generation.",
                votes: a
            }
            });
        
       // console.log(this.state.showit);
    }
    
    getValuetwo = (a) => {
        console.log(a);

        this.setState({
            two: {
                name: "Porsche",
                image: "porsche.jpg",
                model: "911 Turbo S",
                about: "Beautiful and Classy, What else you need!!",
                votes: a
            }
        });

        // console.log(this.state.showit);
    }
    getValuethree = (a) => {
        console.log(a);

        this.setState({
            three: {
                name: "Ferrari",
                image: "ferrari.jpg",
                model: "Ferrari F8",
                about: "Wooo!!What a Car,It's Just Perfect! ",
                votes: a
            }
        });

        // console.log(this.state.showit);
    }
}
const Winner = (props) => {
    if (props.result)
        return <div><h1 className="ui header" style={{ color:'green' }}>Congratulations, Winner is {props.winner}!!!</h1></div>
    else
        return <div></div>
}


ReactDOM.render(<App />, document.querySelector('#root'));