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
    this.name = "Beaver Stadium";
    this.brdc = 'black';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .card {
      background-color: var(--my-card-fancy-bg, darkblue);
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
    display: inline-block;
    }
    :host([fancy]) {
    display: block;
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
    }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div>${this.title}</div>
    <div id="wrapper">
      <div class="card original"
        style="border-color: ${this.brdc};">
        <h1 class="hd1">${this.name}</h1>
          <img class="img1"   src="https://gopsusports.com/imgproxy/xuPVPshSzLbxQ2PZazgWiKESdVoGiQg7eD4KJZhMK60/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyNC8wNS8xMy9Oa3NGRENvOURDQWdTRlgyTVFqTlRROTN5ejBKb1J3TWZPcWhXWjluLmpwZw.jpg" alt="Image of Beaver Stadium" max-width: "75%">
          <slot><strong>Beaver Stadium</strong> is the football stadium of Penn State Football</slot>
        </a>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
      brdc: { type: String},
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
