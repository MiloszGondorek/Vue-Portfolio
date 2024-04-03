module.exports = {
  // Zmienne środowiskowe dostępne w pliku index.html
  // Użyj ich wewnątrz index.html, aby dostosować aplikację w zależności od środowiska (np. production, development)
  // Wartości są wstrzykiwane podczas budowania aplikacji
  // Przykład: <title><%= htmlWebpackPlugin.options.title %></title>
  // Szczegóły: https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Moja aplikacja Vue";
      return args;
    });
  },
  // Ustawienia serwera deweloperskiego
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
