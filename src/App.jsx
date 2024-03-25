import React, { Component } from 'react';
import { Box, Button } from '@mui/material';

class App extends Component {
    state={
        color : "red",
    }

    func1 = () => {
        this.setState({
            color : "red",
        })
    }

    func2 = () => {
        this.setState({
            color : "black",
        })
    }

    func3 = () => {
        this.setState({
            color : "green",
        })
    }

    func4 = () => {
        this.setState({
            color : "blue",
        })
    }

    func5 = () => {
        this.setState({
            color : "darkcyan",
        })
    }

    render() {
        return (
            <Box>
                <h1 style={{"backgroundColor" : "#999", "padding" : '30px', "color" : this.state.color}}>Active</h1>
                <h2 style={{"color" : this.state.color}}>Modal...</h2>
                <Box display={'flex'} gap={"30px"}>
                    <Button onClick={this.func1} variant="outlined" color="error" type="button">red</Button>
                    <Button onClick={this.func2} variant="outlined" style={{"color" : "black", "borderColor" : "black"}} type="button">black</Button>
                    <Button onClick={this.func3} variant="outlined" color="success" type="button">green</Button>
                    <Button onClick={this.func4} variant="outlined" type="button">blue</Button>
                    <Button onClick={this.func5} variant="outlined" style={{"color" : "darkcyan", "borderColor" : "darkcyan"}} type="button">darkcyan</Button>
                </Box>
            </Box>
        );
    }
}

export default App;
