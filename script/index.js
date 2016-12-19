import * as angular from 'angular';
import * as app  from './app';
import * as item  from './item';
import * as network  from './network';
import 'angular-deckgrid';

angular
	.module(process.env.name, [
		'akoenig.deckgrid',
		require('angular-sanitize')
	])
	.controller(app.name, app.default)
	.controller(item.name, item.default)
	.directive(network.name, network.default);
