import React from "react";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

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
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We are a modern development bank."
        description="DBG is a structured as a whole sale investment bank headquartered in Accra, Ghana. DBG’s mission is to promote development as a multigenerational long term capital investor, seeking to make a return on our investment while making a difference in the way the community views us, while making a difference in the way the environment is protected.  At DBG we are looking at the future of Ghanaian and Africans as a very bright future."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Values</Subheading>}
        heading="We aim to support our people and their goals."
        description="We are an organization about values. We believe organizations set the tone and push an agenda that is aligned to our mission. We will stand two to two with any institution private or public, and government today or in the future to ensure the development goals in Ghana and Africa are maintained, developed and sustained in the face of uncertainty and change for this generation and for future generations."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We value these."
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
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
        heading={"Our Executive Management"}
      />
      <Footer />
    </div>
  );
};
