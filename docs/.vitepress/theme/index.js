import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    import("ivy-ui");
  },
};
