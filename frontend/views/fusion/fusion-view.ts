import '@vaadin/button';
import '@vaadin/notification';
import { Notification } from '@vaadin/notification';
import '@vaadin/text-field';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';
import { router } from '../../index';

@customElement('fusion-view')
export class FusionView extends View {
  name = '';

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  render() {
    return html`
      <vaadin-text-field label="Your name" @value-changed=${this.nameChanged}></vaadin-text-field>
      <vaadin-button @click=${this.sayHello}>Say hello</vaadin-button>
      
      <a href="${router.urlForPath('/test/test')}">Redirect (using JS) to a nested view</a>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  sayHello() {
    Notification.show(`Hello ${this.name}`);
  }
}
