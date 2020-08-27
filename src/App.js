import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import {Route, Switch} from 'react-router-dom';

function App() {
  function findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route exact path='/' render={routeProps => <PaletteList palettes={seedColors} {...routeProps}/>}/>
      <Route exact path='/palette/:id' render={routeProps => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path='/palette/:paletteId/:colorId' render={routeProps => <SingleColorPalette palette={generatePalette(findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId}/>}/>
    </Switch>
  );
}

export default App;
