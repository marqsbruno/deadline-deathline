import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    font: string;

    colors: {
      bg: string;
      app2: string;
      app1: string;

      text: string;
    };
  }
}
