import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: 'hex', open: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const { level, handleLevels, showLevels, backUrl } = this.props;
        const { format, open } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <Link to={backUrl}><KeyboardBackspaceIcon/></Link>
                </div>
                {showLevels && <div className='slider-container'>
                    <span>Level: [{level}]  </span>
                    <div className='slider'>
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleLevels} />
                    </div>
                </div>}
                <div className='select-container'>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={open}
                    message='Format Changed!'
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>}
                />
            </header>
        )
    }
}

export default Navbar;