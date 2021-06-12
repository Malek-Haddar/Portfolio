import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to present my self to the world and
        take my development skills to the next level.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/malek-haddar-288304182/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACsdoIgBlzo-YgtBNkaQvwKn9MXB7tiA1gI,1635458032425)/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
