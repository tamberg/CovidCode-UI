export const environment = {
	production: true,
	host: 'https://codegen-service.bag.admin.ch',
	eiamSelfAdmin: 'https://sts.pts.admin.ch/_pep/myaccount?returnURL=https%3A%2F%2Fwww.codegen-d.bag.admin.ch',
	oidc: {
		clientId: 'ha-ui',
		afterLoginPath: '/generate-code',
		stsServer: 'https://identity.bit.admin.ch/realms/bag-pts',
		applicationUrl: 'https://www.codegen.bag.admin.ch/',
		post_logout_redirect_uri: 'https://www.codegen.bag.admin.ch/',
		silentRenew: false,
		useAutoLogin: false,
		debug: true,
		token_aware_url_patterns: ['/v1/(authcode).*']
	}
};
