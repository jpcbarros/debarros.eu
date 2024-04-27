/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(_input) {
    return {
      name: "DeBarros",
      /**
       * NOTE: Given the stateless nature of this App, we can always remove it,
       * including the Production state.
       */
      removal: "remove",
      home: "aws",
      providers: {
        aws: {
          profile: "default",
          region: "us-east-1",
        },
      },
    };
  },
  /**
   * @todo support joaopedrobarros.com.br via redirect as well,
   * possibly via ApiGateway or CloudFront Router
   */
  async run() {
    const isProd = $app.stage === "production";

    const app = new sst.aws.Nextjs("Site", {
      domain: {
        hostedZone: "debarros.eu",
        ...(isProd
          ? {
              domainName: `debarros.eu`,
              redirects: ["www.debarros.eu"],
            }
          : {
              domainName: `dev.debarros.eu`,
            }),
      },
    });

    return {
      appUrl: app.url,
    };
  },
});
