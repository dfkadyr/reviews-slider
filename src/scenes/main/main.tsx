import React from "react";

import { SlickSlider } from "../../components/SlickSlider";

import { reviewsList } from "./data";
import { IProps } from "./interface";
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
  Goal,
  Thumb,
  ThumbImage,
  JobTitle,
  ThumbName,
} from "./styles";

export const MainPage: React.FunctionComponent<IProps> = () => {
  const customThumb = (index: number) => (
    <Thumb color={reviewsList[index].color}>
      <ThumbImage src={reviewsList[index].image} />
      <div>
        <JobTitle color={reviewsList[index].color}>{reviewsList[index].job}</JobTitle>
        <ThumbName>{reviewsList[index].name}</ThumbName>
      </div>
    </Thumb>
  );

  return (
    <Wrapper>
      <Container>
        <Title>Отзывы</Title>
        <SlickSlider dots fade customPaging={customThumb}>
          {reviewsList.map((item) => (
            <div key={`slider-item-${item.id}`}>
              <ReviewContainer>
                <ImageContainer>
                  <PrimeImage src={item.image} />
                  <AuthorName isVideo={item.video}>{item.name}</AuthorName>
                </ImageContainer>
                <TextContainer color={item.color}>
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
