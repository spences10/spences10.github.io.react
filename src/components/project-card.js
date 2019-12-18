// import Dump from '@wesbos/dump';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { PATTERNS } from '../theme/theme-constants';
import { ButtonSmall } from './shared';

const Name = styled.h3`
  margin: 0.5rem;
  padding: 0.5rem;
  color: ${props => props.theme.fontWhite};
  font-family: ${props => props.theme.fontHeader};
  font-weight: 900;
  text-align: center;
`;

const Desc = styled.div`
  margin: 0rem;
  padding: 1rem 0.5rem;
  height: 7rem;
  border-radius: 0px 0px 5px 5px;
  color: ${props => props.theme.fontDark};
  background-color: ${props => props.theme.foreground};
  text-align: center;
  font-family: ${props => props.theme.fontBody};
  font-weight: 700;
  line-height: 150%;
`;

const StyledLink = styled.a``;

const CardWrapper = styled.div`
  margin: 0rem;
  padding: 0rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.foreground};
`;

const StyledProjectCard = styled.div`
  padding: 1.75rem;
  margin: 0rem;
  border-radius: 5px 5px 0px 0px;
  color: ${({ theme }) => theme.colours.grey[200]};
  background-color: ${props =>
    props.id % 2 === 0
      ? `${props.theme.colours.primary[100]}`
      : `${props.theme.colours.primary[600]}}`};
  background-image: url("${PATTERNS.WIGGLE}");
`;

const ImageWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const StyledImage = styled.img`
  max-height: 200px;
  max-width: 200px;
`;

const CardButton = styled(ButtonSmall)`
  text-transform: none;
  border: 2px solid ${props => props.theme.fontWhite};
  color: ${props => props.theme.fontWhite};
  font-family: ${props => props.theme.fontBody};
  font-weight: 700;
  margin: 0.5rem 0.6rem 0.5rem 0.6rem;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  border-radius: 50px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectCard = props => {
  return (
    <CardWrapper key={props.id} id={props.id}>
      {/* <Dump props={props} /> */}
      <StyledProjectCard id={props.id}>
        <ImageWrapper>
          <StyledImage
            style={{
              borderRadius: '100%',
              border: '2px solid white',
            }}
            src={props.image}
            key={props.id}
            alt={`${props.name}`}
            // resolutions={cis}
          />
        </ImageWrapper>
        <Name>{props.name}</Name>
        <ButtonsWrapper>
          <StyledLink
            target="_blank"
            rel="noopener"
            href={props.demo}
          >
            <CardButton>Demo</CardButton>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener"
            href={props.github}
          >
            <CardButton>GitHub</CardButton>
          </StyledLink>
        </ButtonsWrapper>
      </StyledProjectCard>
      <Desc>{props.desc}</Desc>
    </CardWrapper>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
  image: PropTypes.string,
  imgData: PropTypes.object,
};
