import { LitElement, html, css,} from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

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
    this.fancy = false;
    this.title = "pAt's card";
    this.image ="https://i.ytimg.com/vi/hsqYV_-4bNw/maxresdefault.jpg";
    this.link = "https://www.youtube.com/watch?v=kemivUKb4f4&ab_channel=WeezerVEVO";
    this.color = "#189BCC";
    this.text =  "Blue Album" ;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        
      }
      :host([fancy]) .box{
        background-color: pink;
        
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
    width: 500px;
    gap: 15px;
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
margin-left: 20px;

} 

.details{
  margin-top: 50px;
}
.details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  .details[open] summary {
    font-weight: bold;
  }
  
  .details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

     
    
    `;
  }
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null){
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
    

  }
  open(e) {
    console.log(e);
    if (this.fancy == false){
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
    

  }

  render() {
    return html`<div>${this.title}</div>
<body>
<button @click="${this.open}">Toggle </button>
<div id="cardlist">
  <div class="box">
  <meme-maker
  alt="Up your meme game with hax and allow for more accessible memes"
  image-url="https://media.tenor.com/TQv3a_CXvQ0AAAAM/weezer-buddyholly.gif"
  bottom-text="Ooh-wee-hoo"
  top-text="">
  </meme-maker>
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Weezer_logo.png/1200px-Weezer_logo.png" class="cos-logo">
    <div class="box-content">
      <p> ${this.text} </p>
      <br>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot></slot>
          <div class="button">
            <a href="${this.link}" >
            <button id="btn">Details</button> </a>
          </div>
        </div>
      </details>
    </div>
  </div>  
</div>  
</body>
</html> `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true},
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

