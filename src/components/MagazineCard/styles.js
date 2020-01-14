import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border: 1px solid #707070cc;
  border-radius: 5px;
  opacity: 1;
`;

export const CardImage = styled.div`
  height: 407px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image});
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-family: 'Roboto;';
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  margin: 30px auto;
  color: #343538;
`;

export const Button = styled.a`
  background-color: #00a875;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: inline-block;
  text-align: center;
  padding: 10px;
  font-size: 22px;
  font-family: 'Roboto';
  width: 100%;
`;
