import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from "chroma-js";
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({copied: true}, () => setTimeout(() => this.setState({copied: false}),1500));
    }

    render() {
        const {background, name, paletteId, id} = this.props;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.7;
        return (
            <div style={{ backgroundColor: background }} className='ColorBox'>
                <div style={{ backgroundColor: background }} className={`copy-overlay ${this.state.copied && 'show'}`}></div>
                <div className={`copy-msg ${this.state.copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p className={isLightColor && 'dark-text'}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={isDarkColor && 'light-text'}>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleClick}>
                        <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
                    </CopyToClipboard>
                </div>
                {this.props.showMore && <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}><span className={`see-more ${isLightColor && 'dark-text'}`}>More</span></Link>}
            </div>
        );
    }
}

export default ColorBox;
