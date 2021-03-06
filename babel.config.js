module.exports = function getBabelConfiguration(api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-flow",
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          shippedProposals: true,
          targets: {
            node: "9.11.1"
          }
        }
      ],
      ...(process.env.NODE_ENV === "production" ? ["babel-preset-minify"] : [])
    ].filter(Boolean)
    // plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-optional-chaining'],
  };
};
