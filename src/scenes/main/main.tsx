import React, { useMemo } from "react";

import { SlickSlider } from "../../components/SlickSlider";
import { baseUrl } from "../../config";
import test from "../../assets/image/image1.jpg";
import ArrowIcon from "../../assets/arrow.svg";

import { reviewsList } from "./data";
import { IReviewProps, IProps } from "./interface";
import {
  Wrapper,
  Container,
  Title,
  PrimeImage,
  ImageContainer,
  AuthorName,
  ReviewContainer,
  TargetTitle,
  ReviewText,
  AllReadButton,
  TextContainer,
  TargetTitleContainer,
  Goal
} from "./styles";

export const MainPage: React.FunctionComponent<IProps> = () => {

  return (
    <Wrapper>
      <Container>
        <Title>Отзывы</Title>
        <SlickSlider fade>
          {reviewsList.map((item) => (
            <div key={`slider-item-${item.id}`}>
              <ReviewContainer>
                <ImageContainer>
                  <PrimeImage src={test} />
                  <AuthorName isVideo={item.video}>{item.name}</AuthorName>
                </ImageContainer>
                <TextContainer>
                  <TargetTitleContainer>
                    <Goal>Цель</Goal>
                    <TargetTitle>{item.target}</TargetTitle>
                  </TargetTitleContainer>
                  <ReviewText>{item.text}</ReviewText>
                  <AllReadButton>Читать целиком</AllReadButton>
                </TextContainer>
              </ReviewContainer>
            </div>
          ))}
        </SlickSlider>
      </Container>
    </Wrapper>
  );
};
