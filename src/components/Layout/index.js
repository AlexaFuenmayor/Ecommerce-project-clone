import React from "react";
import {Header} from "../Header/index.js";
import Information from "../Information";
import Footer from "../Footer";
import { Container, Wrapper } from "./styles.js";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Information />
      <Footer />
    </Container>
  );
};
