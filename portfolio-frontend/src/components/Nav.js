import React, { Component } from 'react';

export default class Nav extends Component {
    

    render() {
        
      return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav-border" aria-label="Eleventh navbar example">
                <div class="container-fluid">
                    <a class="brand" href="#">Elana Ryznar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="true">View</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown09">
                                  <li><a class="dropdown-item" href="#">Dev Projects</a></li>
                                  <li><a class="dropdown-item" href="#">Artwork</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        
                        </ul>
                    </div>


                </div>
            </nav>
        
        
      )}
}
