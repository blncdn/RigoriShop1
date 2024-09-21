module.exports = {
    apps: [
      {
        name: "evershopAzure",
        script: "npm",
        env: {
          NODE_ENV: "production",
          NPM_CONFIG_LEGACY_PEER_DEPS: true
        },
        args: "run start",
      },
    ],
  };
  