import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { w } from '@dojo/widget-core/d';

import HelloWorld, { HelloWorldProperties } from './widgets/HelloWorld';

export default class App extends WidgetBase<any> {

	private stranger: boolean = true;

	private toggleStranger() {
		this.stranger = !this.stranger;
		this.invalidate();
	}

	protected render(): DNode {
		const { stranger, toggleStranger } = this;

		return w<HelloWorldProperties>(HelloWorld, { stranger, toggleStranger });
	}
}
