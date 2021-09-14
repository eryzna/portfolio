import React, { Component } from 'react';

export default class RowTwo extends Component {
    

    render() {
        
      return (

        <div class="container-fluid">

            <div class="row mb-auto row-1 grid-border">
                <div class="col-md-8 themed-grid-col" id="nested-columns">
                    <div class="pb-3 nested-rows" id="nested-8">
                      .col-md-8
                    </div>
                    <div class="row nested-rows">
                      <div class="col-md-6 themed-grid-col" id="nested-6-1">.col-md-6</div>
                      <div class="col-md-6 themed-grid-col" id="nested-6-2">.col-md-6</div>
                    </div>
                </div>
                <div class="col-md-4 themed-grid-col" id="nested-4">.col-md-4</div>
            </div>
        </div>

      )
    }
}