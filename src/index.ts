import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js"

class MyCounter extends LitElement {
  
  @state()
  private count = 0

  static styles = css`        
      * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 64px;
          height: 64px;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  
  
  render(){
    return html`
    <button @click="${this.dec}">-</button>
    <span>${this.count}</span>
    <button @click="${this.inc}">+</button>
    `
  }
}

customElements.define("my-counter", MyCounter);
