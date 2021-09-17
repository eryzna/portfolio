import React, { Component } from 'react';
import Carousel from './CarouselOne.js'
export default class RowOne extends Component {
    

    render() {
        
      return (

        
          <div class="container-fluid">
            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-1">
                
                <img src="Gustav-1.jpg" alt="green cat"></img>
                
              </div>
              <div class="col-md-6 themed-grid-col grid-border" id="r1-6">
                <Carousel />
              </div>
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-2">.col-md-3</div>
            </div>
            
          </div>

      )
    }
}