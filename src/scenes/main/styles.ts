import styled, { css } from "styled-components";

import videoIcon from "../../assets/video.svg";
import goalIcon from "../../assets/goal.svg";
import arrowIcon from "../../assets/arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;

  .slick-arrow {
    width: 50px;
    height: 40px;

    top: -50px;
    right: 0;

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.shadow};;
    border-radius: 0 25px 25px 0;

    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.font};

      &:before {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &:before {
      content: ">";
      color: ${({ theme }) => theme.colors.font};

      line-height: 5px;
      font-weight: bold;
    }
  }

  .slick-prev {
    left: auto;
    right: 50px;

    border-radius: 25px 0 0 25px;

    &:before {
      content: "<";
    }
  }

  .slick-next {
    border-radius: 0 25px 25px 0;
    border-left: none;
  }
`;

export const Container = styled.div`
  width: 1279px;
  height: 654px;

  padding: 20px 40px 40px 40px;

  border-radius: 4px;
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  margin-bottom: 22px;

  font-size: 50px;

  color: ${({ theme }) => theme.colors.font};
`;

export const ImageContainer = styled.div`
  position: relative;
`;
export const AuthorName = styled.div<{ isVideo: boolean }>`
  position: absolute;
  bottom: 0;

  width: 1px;

  margin-left: ${({ isVideo }) => (isVideo ? `110px` : null)};
  padding: 25px 17px;

  color: ${({ theme }) => theme.colors.white};

  font-size: 30px;
  font-weight: bold;

  ${({ isVideo }) =>
    isVideo &&
    css`
      &:before {
        content: "";
        display: block;

        position: absolute;
        left: -90px;

        width: 91px;
        height: 70px;

        background-image: url(${videoIcon});
      }
    `}
`;

export const ReviewContainer = styled.div`
  display: flex;
`;

export const TargetTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 2.25;
`;

export const ReviewText = styled.div`
  padding-top: 70px;

  font-size: 18px;
  line-height: 1.67;
`;

export const AllReadButton = styled.button`
  position: absolute;
  bottom: 30px;

  padding: 10px 15px;

  color: ${({ theme }) => theme.colors.white};

  background: transparent;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.5);

  cursor: pointer;
`;

export const TextContainer = styled.div`
  padding: 30px 40px;

  color: ${({ theme }) => theme.colors.white};

  background-color: green;
`;

export const PrimeImage = styled.img`
  max-width: 600px;
  height: 410px;
`;

export const Goal = styled.div`
  position: relative;

  margin-right: 15px;
  padding: 5px 8px 5px 21px;

  font-weight: bold;

  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:before {
    content: "";
    display: block;

    position: absolute;
    left: 5px;

    width: 15px;
    height: 17px;

    background-image: url(${goalIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
export const TargetTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
