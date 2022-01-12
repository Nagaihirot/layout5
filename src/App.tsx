import styled from 'styled-components';

function App() {
  return (
    <_Frame>
      <_Header>

      </_Header>
      <_Body>

      </_Body>
      <_Footer>

      </_Footer>
    </_Frame>
  );
}

export default App;

const _Frame = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #eba4a4
`;

const _Header = styled.div`
position: fixed;
display: inline-block;
    width: 100%;
    height: 40px;
    background-color: #fd0707
`;

const _Body = styled.div`
display: inline-block;
    width: 100%;
    height: 2000px;
    background-color: #fbff00
`;

const _Footer = styled.div`
display: inline-block;
    width: 100%;
    height: 80px;
    background-color: #13ff46
`;