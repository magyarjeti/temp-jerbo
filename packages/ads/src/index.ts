import { initCampaign, type Config as RempConfig } from './remp';
import { initConsent, displayConsentUi } from './consent';
import { initAdme, type Config as AdmeConfig } from './adme';

type Config = {
	remp?: RempConfig;
	adme?: AdmeConfig;
};

export { initConsent, displayConsentUi };

export function showAds(config: Config) {
	if (config.remp) {
		initCampaign(config.remp);
	}
	if (config.adme) {
		initAdme(config.adme);
	}
}
