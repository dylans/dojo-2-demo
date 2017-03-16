import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { w } from '@dojo/widget-core/d';

import HelloWorld, { HelloWorldProperties } from './widgets/HelloWorld';

export default class App extends WidgetBase<any> {

	private stranger: boolean = true;

	render(): DNode {
		const { stranger } = this;

		return w<HelloWorldProperties>(HelloWorld, { stranger });
	}
}
