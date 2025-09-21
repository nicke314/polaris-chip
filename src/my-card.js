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
    this.title = "My Card";
    this.bgc = 'blue';
    this.name = "Beaver Stadium";
    this.brdc = 'black';
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
      background-color: darkblue;
      padding: 10px;
      margin: 6px;
      max-width: 400px;
      text-align: center;
      border: 8px solid;
      border-color: black;
      color: lightgray;
    }
    .hd1 {
      color: white;
    }
    .img1 {
      max-height: 100%;
      max-width: 100%;
    }
    .btn {
      display: none;
    
    }
    .btn:hover,
    .btn:focus {
      color:white;
      background-color:blue;
    }
    #wrapper {
    display: flex;
    }
    `;
  }

  render() {
    return html`<div>${this.title}</div>
    <div id="wrapper">
      <div class="card original"
        style="background-color: ${this.bgc}; border-color: ${this.brdc};">
        <h1 class="hd1">${this.name}</h1>
          <img class="img1"   src="https://gopsusports.com/imgproxy/xuPVPshSzLbxQ2PZazgWiKESdVoGiQg7eD4KJZhMK60/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyNC8wNS8xMy9Oa3NGRENvOURDQWdTRlgyTVFqTlRROTN5ejBKb1J3TWZPcWhXWjluLmpwZw.jpg" alt="Image of Beaver Stadium" max-width: "75%">
  
       <p class="bsp">This is an image of beaver stadium at night before a white out game as the Penn State football team is running out onto the field. There are fireworks in the sky, and everyone is wearing white. Technically the stadium is West Shore Home Field at Beaver Stadium, but nobody calls it that. </p> 
  
        <a href="https://hax.psu.edu">
        <button class="btn">Details</button>
        </a>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      bgc: { type: String },
      name: { type: String },
      brdc: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
