import React from 'react';

import { Img } from '../Projects/ProjectsStyles';
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
          '')
        }
      >
        Malek Haddar
      </Button>
    </LeftSection>
    <LeftSection >
      <img src='/images/malek.png' width="310px" height="450px" />
    </LeftSection>
  </Section>
);

export default Hero;
