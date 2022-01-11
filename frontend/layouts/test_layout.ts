import { customElement, property } from "lit/decorators";
import {Layout} from "Frontend/views/view";
import {router} from "Frontend/index";
import {Notification} from "@vaadin/notification";
import {css, html, PropertyValues} from "lit";
import '@vaadin/vaadin-lumo-styles/color';

@customElement('test-layout')
class TestLayout extends Layout {
    @property({type: Object}) location = router.location;

    static styles = css`
        .main {
            background-color: white;
            padding: 5rem;
        }
        .inner {
            background-color: var(--lumo-base-color);
            margin: 5rem;
        }
        .slot {
            border: 5px solid red;
        }
    `;

    protected render(): unknown {
        return html`
        <div class="main">
            <div class="inner">
                <div>Test Layout</div>
                <div class="slot">
                    <slot></slot>
                </div>
            </div>
        </div>
        `;
    }

    protected updated(_changedProperties: PropertyValues) {
        Notification.show(`Subview detected a redirection to ${this.location.pathname}!`, {theme: 'success'});
    }
}