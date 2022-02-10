import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import styled from "styled-components";

import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "components/headers/light.js";

const HighlightedText = tw.span`text-primary-500`
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default () => {
  return (
    <div className="siteContainer">
      <Header />
      <Hero />
      <Features 
        heading={<>We are looking for <HighlightedText>Long-term Investment&nbsp;Partnerships</HighlightedText></>}
      />
      <FeatureStats/>
      <Container>
        <ContentWithPaddingXl>
          <Text>
          {/* <h2>Our Investment Approach</h2>
          <p>The value-adding requirement that we seek to embed in our financing partners, and other financial investors do understand that DBG is focused on long term capital recycling. This approach is different from permanent capital and traditional private equity because our goal is to return investors money with a reasonable return.</p>
          <p>This partnership approach and capital preservation approach is supported by the fact that DBG will limit the number of companies in which it invests, focusing its efforts on companies that can serve as growth conduits for domestic development and regional expansion. Using the capital we raise from our partners, we expect to develop a strong pipeline of sustainable  businesses which will, at times, require the adoption of lengthy investment time horizons as a result the instruments we invest with are going to be key to our ability to exit investments in a timely and profitable manner.</p>
          <p>The flexibility that DBG has in terms of investment and financing periods originates from the fact that it has been established as a wholesale bank and seeks to attract investors who care about capital and enhanced returns, but also expect to take a bit more risk than what they would otherwise get their home countries.</p>
          <br/> */}
          <h2>We set a clear-cut sector focus agenda</h2>
          <p>DBG focuses primarily on business in (Fast Moving Consumer Goods) FMCG, Retail and Distribution, Education & High Value Services Skills, Healthcare and Bio Technology, and Agribusiness, Manufacturing, Technology Media and Telecommunications, Transportation and Logistics, Heritage Restoration and Tourism</p>
          <p>Our clear sector focus brings with it deep industry expertise and extensive networks, greatly enhancing the positive impact that DBG can have on the companies in which it’s funds are used to invest in.</p>
          <h2>No Commodoties No Natural Resource Focus</h2>
          <p>At DBG we believe there are sufficient pools of capital geared towards commodity related business, thus our focuses remain on companies where the underlying health and long-term prospects of the businesses is clear and strategic towards our development goad. We believe there are still plenty opportunity that go unfunded in the current market and rather than focusing on short term gains we would rather invest our capital resources on sustainable companies.</p>
          <h2>Active Investment Management</h2>
          <p>DBG is an active, value oriented investor that engages positively and in a collaborative fashion with the entrepreneurs, boards and management of investee companies.</p>
          <p>DBG prioritizes the institutionalization of business practices such as business excellence, financial discipline, operational efficiency and sound corporate governance</p>
          <p>In doing so, it is able to draw on its investment team’s deep experience in strategy and operations across Ghana.</p>
          <h2>Investment criteria</h2>
          <p>DBG seeks to pursue investments in private companies through it partner banks and financial institutions which operate in Ghana and have the following characteristics;</p>
          <ul>
            <li>A large share of the addressable and rapidly growing market within a specific sector</li>
            <li>Minimal public sector dependency</li>
            <li>Attractive industry structure with proven, profitable and sustainable business model</li>
            <li>Service related companies that focus on heritage restoration for profit and preservation</li>
            <li>Businesses with standardized process and simple value enhancement plans</li>
            <li>Business that have a strong market position</li>
            <li>Driven entrepreneurs/management team</li>
          </ul>
          <h2>In offering Private Debt:</h2>
          <p>We will invest in early stage, expansionary or late stage businesses that can demonstrate a measurable and scalable social or environmental impact with funds received via DBG financial institutions. We will seek to partner with management teams to develop the optimal financing solution for their businesses; often developing creative financing structures that align with the needs of these growing businesses which keeping our return expectations in mind.</p>
          <h2>In offering private Equity Directs:</h2>
          <p>We seek to invest in the growth of attractive enterprises with a proven business model, high development potential and a measurable and scalable social or environmental impact where we can clearly see a path to disproportionate upside or a path to exit.</p>
          <ul>
            <li>On Lend to Clients Principally to refinance and scale up their business</li>
            <li>Operate on earning fixed returns in some cases 2 to 2.5x guaranteed, Interest Spreads & various Fee incomes</li>
            <li>Other unique strategies will include  Refinancing of Term Loans</li>
            <li>Term loans to Term Loans to PLIs</li>
            <li>Special Funds provide Credit Guarantees to Funds and Businesses</li>
          </ul>
          <h2>Development Impact</h2>
          <p>
            We seek to provide growth capital to businesses with a proven business model, mission-aligned management teams and the potential to generate wide scale local development impact such as jobs, skill training, housing etc at a scale necessary to make a difference. We follow international standards with relative-value versus risk in our investment approach. Diversifying our investment portfolio across a broad range of developmental impact sectors in Ghana, and offering financial instruments that can support the entire capital structure underpins our investment approach. Our top priority  while trying to achieve risk-adjusted financial returns is ensure we are supporting communities change and grow. For DBG a successful investment is when underserved communities’ benefit from access to basic products and services, creating new jobs, while protecting the environment.
          </p>
          <h2>Value Creation &amp; Exits</h2>
          <p>During the due diligence process we are sure to set the tone for our exit path before embarking on any investment. It is important for us to define the impact and value creation strategy, and the investment tools and way in which we want to exit the investment. At DBG we believe that exiting is as important as development goals and  post-investment outcomes will be designed to drive impact & value creation initiatives. Constantly reviewing progress against strategy and action plans is important achieving our path to achieving our core mission to be Ghana’s leading provider of long term finance in economically important sectors on a sustainable basis to achievethe economic transformation needed in the country.</p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      
      {/* <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      /> */}
      {/* <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      /> */}
      {/* <Pricing 
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      />
      <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      /> */}
      <GetStarted/>
      <Footer />
    </div>
  );
}
