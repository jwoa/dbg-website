import React from "react";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoCol.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <div className="siteContainer">
      <Header />
      {/* <Hero /> */}
      <MainFeature1
        subheading={<Subheading>Sustainability &amp; ESG</Subheading>}
        heading="Policy &amp; People"
        description="We incorporate ESG as an overall corporate policy aligned to overall vision and mission statement and as a dedicated components in our individual policies. Our corporate policy is aligned with BoG’s Sustainable Banking Principles, 2015 setting the tone at the top and embedding our approach to our people and stakeholders in a value driven and ethical way."
        imageSrc="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Process &amp; Systems"
        description="Our operational policies incorporate ESG elements in the transaction from cycle -screening partner financial institutions to, due diligence reviews of underlying transactions to, transaction execution, approvals, monitoring and reporting of our investment activities. We are essentially operating inline with the  IFC performance standards as well as the  CDC ESG toolkit for financial institutions"
        imageSrc="https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Portfolio &amp; Risk Management"
        description="We apply a rigorous approach to portfolio &amp; risk management, leveraging our banking partners experience, which will also contribute to an outstanding track record and high levels of stakeholder satisfaction."
        imageSrc="https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="Portfolio &amp; Risk Management"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      /> */}
      <Footer />
    </div>
  );
};
