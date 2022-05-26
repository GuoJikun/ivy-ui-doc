import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.config.compilerOptions.isCustomElement = (tag) => tag.startWith("ivy-");
    console.log(app);

    import("ivy-ui");
  },
};
