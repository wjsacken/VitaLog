import React from "react";
import Layout from "../components/Layout";
import Header from "../components/HeaderLanding";
import Banner from "../components/BannerLanding";



const HomePage = () => (
  <div>
    <Layout pageTitle="VitaLog | Coming Soon">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <Banner />

    </Layout>
  </div>
);

export default HomePage;
