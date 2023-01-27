import React from "react";
import { Header } from "../Header/index.js";
import Information from "../Information";
import Services from "../Service-component/index.js";
import Footer from "../Footer";
import { Container} from "./styles.js";
import Plans from "../PLans/index";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Information />
      <Services />
      <Plans />
      <Footer />
    </Container>
  );
};
