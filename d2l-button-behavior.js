/** @polymerBehavior */
export const ButtonBehavior = {
	properties: {

		/**
         * Whether the button is the primary button.
         */
		primary: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
         * Standard HTML disabled.
         */
		disabled: {
			type: Boolean,
			reflectToAttribute: true
		},
		/**
		 * Indicates whether the element, or another grouping element it
		 * controls, is currently expanded or collapsed.
		 */
		ariaExpanded: String,
		/**
		 * Indicates the button opens a menu.
		 */
		ariaHaspopup: String,
		/**
		 * A string to be used as the accessible label, which overrides text content.
		 */
		ariaLabel: String,
		/**
		 * Standard HTML autofocus.
		 */
		autofocus: {
			type: Boolean,
			reflectToAttribute: true
		},
		/**
         * Standard HTML form.
         */
		form: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML formaction.
         */
		formaction: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML formenctype.
         */
		formenctype: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML formmethod.
         */
		formmethod: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML formnovalidate.
         */
		formnovalidate: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML formtarget.
         */
		formtarget: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML name.
         */
		name: {
			type: String,
			reflectToAttribute: true
		},
		/**
         * Standard HTML type.
         */
		type: {
			type: String,
			reflectToAttribute: true
		}

	}

};
