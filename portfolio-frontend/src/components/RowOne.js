import React, { Component } from 'react';

export default class RowOne extends Component {
    

    render() {
        
      return (

        <div class="container-fluid">

            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border">.col-md-3</div>
              <div class="col-md-6 themed-grid-col grid-border">.col-md-6</div>
              <div class="col-md-3 themed-grid-col grid-border">.col-md-3</div>
            </div>
        </div>

      )
    }
}