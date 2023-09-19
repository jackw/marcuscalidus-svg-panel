module.exports.getWebpackConfig = (config) => {
  const plugins = config.plugins.filter(
    (plugin) => !(plugin && plugin.constructor && plugin.constructor.name === 'ForkTsCheckerWebpackPlugin')
  );
  return {
    ...config,
    plugins,
    externals: [...config.externals, 'jquery.flot.pie'],
  };
};
