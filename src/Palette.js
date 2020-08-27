import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.handleLevels = this.handleLevels.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    handleLevels(newLevel) {
        this.setState({level: newLevel});
    }
    changeFormat(val) {
        this.setState({format: val});
    }

    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox key={color.id} background={color[format]} name={color.name} id={color.id} paletteId={id} showMore={true}/>
        });
        return(
            <div className='Palette'>
                <Navbar level={level} handleLevels={this.handleLevels} handleChange={this.changeFormat} showLevels={false} backUrl='/'/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;
