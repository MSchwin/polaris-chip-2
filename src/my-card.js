import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "pAt's card";
    this.image ="https://i.ytimg.com/vi/hsqYV_-4bNw/maxresdefault.jpg";
    this.link = "https://www.youtube.com/watch?v=kemivUKb4f4&ab_channel=WeezerVEVO";
    this.color = "#189BCC";
    this.text =  "Blue Album" ;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        
      }
      button:hover {
  color: red;
}
#card-list{
  display: flex;
}
.box {
   display: flex; 
    align-items: center;
    background-color: var(--box-color, #189BCC); ;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid black;
    padding: 15px;
    max-width: 400px;
    height: 200px;
    width: 90%;
    gap: 15px;
}
.fancy{
  background-color: blue;
  
}

.box-image {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
}
.cos-logo{
  width: 200px;
  margin-bottom: 150px;
  height: auto;
  
}

.box-content {
  font-size: 20px; 
  font-weight: bold;
  color: black;
  margin-left: -165px;
 
  
}
.button{
margin-left: 50px;
} 

     
    
    `;
  }

  render() {
    return html`<div>${this.title}</div>
<body>
  <div id="cardlist">
   <div class="box">
      <img src="${this.image}" alt="${this.title}" class="box-image">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Weezer_logo.png/1200px-Weezer_logo.png" class="cos-logo">
   <div class="box-content">
     <p> ${this.text} </p>
     <br>
   <div class="button">
   <a href="${this.link}" >
   <button id="btn">Details</button> </a>
</div>
 </div>
 </div>  
    </div>
</body>
</html> `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},
      color: { type: String},
      text : { type: String}
    };
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.style.setProperty("--box-color", this.color);
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

