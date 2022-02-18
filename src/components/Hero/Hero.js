import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      React Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components by deploying React concepts. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com' }>Read More</Button>
    </LeftSection>
  </Section>
);

export default Hero;