import React, { Component } from 'react';

export default class CarouselTwo extends Component {
    

  
componentDidMount = () => {
    this.imgHover()
}
  
imgHover = () => {
    let divEl = document.querySelector('#nested-4');
    //let imgOne = document.getElementsByTagName('img');
    //let imgOne = document.querySelector('#Gustav-1')
    //let imgTwo = document.querySelector('#Gustav-2')
    let items = [...document.getElementsByClassName('carousel-item')];
    
    items.forEach(e => e.addEventListener ('mouseover', () => 
        e.classList.add('overlay')
    ))

    items.forEach(e => e.addEventListener ('mouseleave', () => 
        e.classList.remove('overlay')
    ))
    //items = document.getElementsByClassName("carousel-item")

    //items.foreach
    
    //addEventListener('mouseover', () => 
    //  items.classList.add("overlay")
    //)

    //imgOne.addEventListener('mouseover', () => 
    //  imgOne.className = "overlay"
    //)
    //
    //imgOne.addEventListener('mouseleave', () => 
    //  imgOne.className = ""
    //)

  //imgTwo.addEventListener('mouseover', () => 
  //  imgTwo.className = "overlay"
  //)
//
  //imgTwo.addEventListener('mouseleave', () => 
  //  imgTwo.className = ""
  //)

  //divEl.addEventListener('mouseover', () => console.log('Event: mouseover'));
}


    render() {
        
      return (
        <div id="myCarouselTwo" class="carousel slide carousel-2" data-bs-ride="carousel-2">
        
        <div class="carousel-inner">
          <div class="carousel-item active carousel-two">
            <svg class="bd-placeholder-img" width="100%" height="397px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
    
            <div class="container ">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/Gustav-2.png" id="Gustav-2" height="397px" alt="pink cat illustration"></img>

          </div>
          <div class="carousel-item">
              <img src="/Gustav-1.jpg" id="Gustav-1" height="397px" alt="green cat illustration"></img>
                
          </div>
        </div>

        <button class="carousel-control-prev control-button" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    

            
            )

      }}