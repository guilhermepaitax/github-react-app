import styled, { css } from 'styled-components';

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    align-self: flex-start;
    opacity: 0.2;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    opacity: 1;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    transform: scale(1.08) translateY(-1.5px);
    transition: all 0.2s ease;
  }

  img {
    width: 110px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 15px;
    font-weight: 500;
    text-transform: capitalize;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 20px;
  border-top: 1px solid #eee;
  list-style: none;

  div {
    margin-bottom: 25px;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #7159c1;
          font-weight: 500;
          font-size: 15px;
        }
      }

      p {
        margin-top: 5px;
        font-weight: 500;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Label = styled.span`
  background: ${props => `#${props.color}` || '#d1f3cb'};
  color: #333;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 3px 4px;
  margin-left: 10px;
  border-radius: 3px;
  line-height: 2;
`;

export const ToogleButton = styled.button`
  border: none;
  background: white;
  font-weight: 500;
  padding: 7px 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    transform: scale(1.02) translateY(-1.5px);
    transition: all 0.2s ease;
  }

  & + button {
    margin-left: 10px;
  }

  ${props =>
    props.selected &&
    css`
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
      transform: scale(1.02) translateY(-1.5px);
      transition: all 0.2s ease;
      color: #ff6666;
    `}
`;

export const IssuesLoading = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 10px;
  border: 1px solid #eee;
  border-radius: 4px;

  .loadingContent {
    flex: 1;
    margin-left: 15px;
    margin-bottom: 0px;
  }
`;

export const Pagination = styled.div`
  margin-top: 15px;
  margin-bottom: 0px !important;
  display: flex;
  justify-content: center;
  flex: 1;

  button {
    background: white;
    border: none;
    cursor: pointer;
    margin: 0 10px;
    text-decoration: underline;
    font-weight: 600;
    color: #7159c1;
  }
`;
