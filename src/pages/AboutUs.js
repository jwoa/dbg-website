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
import TeamCardGridMS from "components/cards/ProfileThreeColGridMS.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
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
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
        description={"Our Board of Directors provide the overall guidance and policy direction to our executive management team. Our executive management team sets the overall strategy and leads by example to ensure the culture of DBG is aligned with our values as well as our mission. It is essential for our Board of Directors to set the tone so that the entire DBG team deliver on our mandate of supporting the vision and mission of the organization."}
      />
      <TeamCardGridMS 
        subheading={<Subheading>Our Team</Subheading>}
        heading={"Our Executive Management"}
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

      <Container>
        <ContentWithPaddingXl>
          <Text>
              <h1>Corporate Governance</h1>
              <h3>Governance Framework</h3>
              <p>
              The Development Bank Ghana (DBG) was established in 2017. In 2021 the bank received its license from the regulator Bank of Ghana. The Development Bank Ghana (DBG) focus is to help address the market failures in the Ghanaian credit markets, with an aim to increase the availability of medium and to long term financial instruments to support Ghanaian businesses. DBG”s goal will facilitate economic transformation and job creation. DBG in essence will be constituted as a commercial banking institution governed by the provisions of the Ghanaian Company Act.
              </p>
              <p>
              DBG’s governance framework will emphasizes and prioritize the impact to the underlying businesses that we finance and invest in, while ensuring the integrity of our long term return profile of an investment.
              </p>
              <p>
              Our Board and senior management of team will also ensure compliance with the rules and regulations of a regulated financial institution wherever we have investments or operations.
              </p>

              <h3>Marketable Discipline</h3>
              <p>
              As a Development Finance Institution, we want to ensure that our investors and investee companies see us as market ready. We seek to manage our portfolio as an active investor and as an asset owner, with full commercial responsibility under the guidance of our Board.
              </p>

              <h3>DBG’s relationship with the Government of Ghana</h3>
              <p>
              DBG’s long term objective is to grow access to national and international capital markets to gradually reduce the dependency on GoG for funds and increase the share of market borrowings at competitive rates of interest.
              </p>
              <p>
              DBG’s focus is to build a network of strong local and international partnerships for enhanced access to financing and providing value added business support services benefits of scale and establishing visibility in the marketplace capacity development and knowledge transfer
              </p>

              <h3>Relating to Our Investee Companies</h3>
              <p>As an active shareholder, our goal is to promote rigorous corporate governance oversight in our portfolio companies. This includes backing high calibre and experienced entrepreneurs and instituting an independent diverse group of board members to guide and complement management leadership. Our role is to provide an enabling environment for success in within the business community in Ghana. We do not have a desire direct their business decisions or operations but we will pool the financial tool to ensure their success.</p>
              <p>To read more on corporate governance policy please contact (email address to come)</p>

              <h3>Our Board of Directors Roles and Responsibilities</h3>
              <p>Our Board operates on an independent basis, with the added statutory responsibility in conjunctions with the CEO. At all times the Board will be focused on ensuring the protection of the Banks reserves.</p>
              <p>The Board is set to meet on an annual basis, scheduled with quarterly update meetings throughout the year. On an as needed basis additional meetings will be organized to conduct the business of the institution.</p>
              <p>The Board will be constituted in line with the Directive issued under section 6 of the Development Finance Institutions Act, 2020 (Act 1032) DFI Act and will have at least 7 board members and at most 13 board members at all times. At least 60% of members will be independent directors on Boards in most cases and will have the following reserved matters as decision:</p>
              <ul>
                <li>Setting the overall long term strategic objectives of the bank</li>
                <li>Setting the annual budget as well as the review and approval of the annual audited statutory accounts</li>
                <li>Reviewing and approving all investments and exit offers</li>
                <li>Engaging the banks as well as all funding proposals</li>
                <li>Approving the appointment of senior management and putting in place the right structures for and succession planning related to the institution</li>
              </ul>

              <h3>Required Board Committees</h3>
              <p>The following Board committees, each chaired by a non-executive Director who is independent of management, will be set up with specific delegated authorities as required under the Bank of Ghana corporate governance directive. The role of the sub committees will be structured such that delegation of authorities of Board are left to the individual committees</p>
              <ul>
                <li>Risk Committee</li>
                <li>Audit Committee (Internal Audit and Internal Controls)</li>
                <li>Compliance, Ethics &amp; Business Conduct Committee</li>
              </ul>

              <p>
              Other committees will be carved out to ensure the smooth running of the organization.
              DBG’s management seeks to work with the Board in a open and transparent manner. Providing information to the Board on an ongoing basis to allow the Board to effectively carry out its responsibilities and make decisions on behalf of its stakeholders.
              </p>

              <h3>Risk Committee</h3>
              <p>
              The Risk Committee at DBG will primarily be responsible for advising the Board on the Regulated Financial Institution’s overall current and future risk, and define in that process the tolerance/appetite and strategy of the Institution for various risks including AML/CFT risk and for overseeing Senior Management’s implementation of the risk strategy. The committee shall be chaired by an experienced independent director who isknowledgeable in risk management, finance, accounting, economics and other business skills. 
              </p>

              <h3>The Compliance, Ethics &amp; Business Conduct Committee</h3>
              <p>
              The Compliance, Ethics &amp; Business Conduct Committee has the delegated authority to approve new investment and exit decisions beyond the defined threshold for Management’s approval. Transactions will be considered be finally approved by the wider Board after a review or approval is sort by the Business Conduct Committee. The minutes of these meetings are circulated to the wider Board for comments. This  committee is poised meet as many times during the year to discuss business and investment matters, however at a minimum they should meet 6 times during the year to ensure the proper scrutiny is being giving to the investment process.
              </p>

              <h3>Audit Committee (AC)</h3>
              <p>
              This committee comprises mainly of independent directors, the AC’s role at DBG is to  support the Board in its oversight responsibilities by reviewing – among other things – our classification of internal controls, and processes used for financial reporting, audit, and monitoring compliance in line with the laws and regulations in Ghana. The AC will also review the scope and findings of the external audit performed annually and the independence of the external auditors.
              </p>
              <p>
              The audit committee will be supported by the Internal Audit and Internal Controls Unit of the bank. This is to ensure that at DBG we have the right level of segregation of roles and responsibility as well as independence. The internal audit as well as the internal controls unit will report functionally to the Audit Committee and administratively to the office of the Chief Executive Officer. In line with international governance practices, the internal audit function will be granted unrestricted access to all records, properties and personnel to effectively perform its functions. In some instances, the Internal Audit unit within the Bank will be requested by the Board of Directors to undertake special reviews  by the leadership team.
              </p>
          
          </Text>
        </ContentWithPaddingXl>
      </Container>

      <Footer />
    </div>
  );
};
