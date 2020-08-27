import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {format: 'hex'};
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(val) {
        this.setState({format: val});
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
        }
        return shades.slice(1);
    }
    render() {
        const colorBoxes = this._shades.map(color => {
            return <ColorBox key={color.name} name={color.name} background={color[this.state.format]} showMore={false}/>;
        }); 
        return (
            <div className='Palette'>
                <Navbar handleChange={this.changeFormat} showLevels={false} backUrl={`/palette/${this.props.palette.id}`}/>
                <div className='SingleColorPalette Palette-colors'>{colorBoxes}</div>
                <footer className='Palette-footer'>
                    {this.props.palette.paletteName}
                    <span>{this.props.palette.emoji}</span>
                </footer>
            </div>
        )
    }
}

export default SingleColorPalette;