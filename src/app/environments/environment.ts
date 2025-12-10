 

export const environment = {
  production: false,
  enableSecurity: true,
  consoleLogDisabled: false,
  siteName: 'Webflow',
  // apiMock: true,
  apiEndpoint: 'http://localhost:8080/wpgflow-service/service/v1',
  apiMock: false,
  apiKey: 'd64da22ef36948e2a7633748fe0a8a8c',
  clientId: '27cf570f-7a2e-42f3-bc82-344d5cf83590',
  authority: 'https://login.microsoftonline.com/de047c79-d4d9-4af3-91de-bc44b0581490',
  redirectUrl: 'http://localhost:4200',
  jwtEndpoint: 'https://itu7-apim.azure-api.net/dev-api/common-security/service/v1',
  jwtApiKey: 'b786399de8024b9f9cbece88d33b22dc',
  //  storeEmbedTargetOrigin: 'https://uat.ibpaas.com/portal-store/myforms/embed',
  storeEmbedTargetOrigin: '*',
  storeRedirectUrlPrefix: 'https://uat.ibpaas.com/portal-store/redirect',
  storeEmbedTargetToBPass: 'https://masterfile-test.ibpaas.com/vendor/add-modify-vendor',
  allowedDomains: ['https://masterfile-test.ibpaas.com', 'https://uat.ibpaas.com', '*'],
  baseDomain: '.ibpaas.com',
  showSidebar: true,
  redirect: true,
  domain: 'uat-wpgflow.wpgholdings.com',
};

 