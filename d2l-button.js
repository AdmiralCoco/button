import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { FocusableBehavior } from '../d2l-polymer-behaviors/d2l-focusable-behavior.js';
import '../d2l-typography/d2l-typography-shared-styles.js';
import './d2l-button-shared-styles.js';
import { ButtonBehavior } from './d2l-button-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="d2l-button">
	<template strip-whitespace>
		<style>
			:host {
				display: inline-block;
			}
			button {
				font-family: inherit;
				padding: 0.5rem 1.5rem;
				@apply --d2l-button-shared;
				@apply --d2l-label-text;
				@apply --d2l-button;
				@apply --d2l-button-clear-focus;
			}
			/* Firefox includes a hidden border which messes up button dimensions */
			button::-moz-focus-inner {
				border: 0;
			}
			button, button[disabled]:hover, button[disabled]:focus {
				background-color: var(--d2l-color-regolith);
				border-color: var(--d2l-color-mica);
				color: var(--d2l-color-ferrite);
			}

			button:hover,
			button:focus,
			:host(.d2l-button-hover) button,
			:host(.d2l-button-focus) button {
				background-color: var(--d2l-color-gypsum);
			}

			button:hover, :host(.d2l-button-hover) button {
				@apply --d2l-button-hover;
			}
			button:focus, :host(.d2l-button-focus) button {
				@apply --d2l-button-focus-plus-border;
			}

			button[disabled] {
				opacity: 0.5;
				cursor: default;
			}
			:host([primary]) button,
			:host([primary]) button[disabled]:hover,
			:host([primary]) button[disabled]:focus {
				background-color: var(--d2l-color-celestine);
				border-color: var(--d2l-color-celestine-minus-1);
				color: #ffffff;
				@apply --d2l-button-primary;
			}

			:host([primary]) button:hover,
			:host([primary]) button:focus,
			:host([primary].d2l-button-hover) button,
			:host([primary].d2l-button-focus) button {
				background-color: var(--d2l-color-celestine-minus-1);
			}

			:host([primary]) button:hover, :host([primary].d2l-button-hover) button {
				@apply --d2l-button-primary-hover;
			}
			:host([primary]) button:focus, :host([primary].d2l-button-focus) button {
				@apply --d2l-button-focus;
			}
		</style>
		<button
			aria-expanded$="[[ariaExpanded]]"
			aria-haspopup$="[[ariaHaspopup]]"
			aria-label$="[[ariaLabel]]"
			class="d2l-focusable"
			disabled$=[[disabled]]
			autofocus$=[[autofocus]]
			form$=[[form]]
			formaction$=[[formaction]]
			formenctype$=[[formenctype]]
			formmethod$=[[formmethod]]
			formnovalidate$=[[formnovalidate]]
			formtarget$=[[formtarget]]
			name$=[[name]]
			type$=[[type]]><slot></slot></button>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
`d2l-button`
Polymer-based web component for buttons

@demo demo/button.html d2l-button
*/
Polymer({
	is: 'd2l-button',

	behaviors: [
		ButtonBehavior,
		FocusableBehavior
	]

});
