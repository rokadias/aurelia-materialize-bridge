// tslint:disable-next-line:no-reference
/// <reference path="materialize.d.ts" />

import { FrameworkConfiguration } from "aurelia-framework";
import { ConfigBuilder } from "./config-builder";
import { ScrollfirePatch } from "./scrollfire/scrollfire-patch";
import { polyfillElementClosest } from "./common/polyfills";

function applyPolyfills() {
	polyfillElementClosest();
}

export function configure(frameworkConfiguration: FrameworkConfiguration, configCallback) {
	applyPolyfills();
	const builder = frameworkConfiguration.container.get(ConfigBuilder);

	if (configCallback !== undefined && typeof (configCallback) === "function") {
		configCallback(builder);
	}

	if (builder.useGlobalResources) {
		frameworkConfiguration.globalResources(builder.globalResources);
	}
	if (builder.useScrollfirePatch) {
		new ScrollfirePatch().patch();
	}
}

// build-index-remove start
export * from "./exports";
// build-index-remove end
