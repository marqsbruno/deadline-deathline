import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    width: string;

    font: string;
    fontSize: string;

    colors: {
      bg: string;
      app2: string;
      app1: string;

      text: string;
      shadow: string;
    };
  }
}
