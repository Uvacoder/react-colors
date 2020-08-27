import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import bg from "./bg.svg";

const styles = {
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`,
        overflow: "scroll"
    },
    container: {
        flexBasis: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "wrap",
        "@media (max-width: 900px)": {
            flexBasis: "75%",
        },
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: "white",
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
        "@media (max-width: 700px)": {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "2%",
        }
    }
}

class PaletteList extends Component {

    gotoPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}><h1>React Colors</h1></nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => {
                            return <MiniPalette key={palette.id} {...palette} handleClick={()=>this.gotoPalette(palette.id)} />;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);