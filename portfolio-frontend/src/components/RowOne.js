import React, { Component } from 'react';
import CarouselOne from './CarouselOne.js'
export default class RowOne extends Component {
    

    render() {
        
      return (

        
          <div class="container-fluid">
            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-1">
                
                
                
              </div>
              <div class="col-md-6 themed-grid-col grid-border" id="r1-6">
                <div class= "grid-border" id="grid-label">
                  <h4>Development Projects</h4>
                </div>
                <CarouselOne />
              </div>
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-2">.col-md-3</div>
            </div>
            
          </div>

      )
    }
}