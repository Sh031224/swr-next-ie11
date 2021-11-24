module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack5: true,
  webpack: function (config) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./src/polyfills.js")
      ) {
        entries["main.js"].unshift("./src/polyfills.js");
      }
      return entries;
    };

    return config;
  },
};
