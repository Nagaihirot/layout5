import styled from 'styled-components';

function App() {

  

  return (
    <_Frame>
      <_Header>
        <_Title>
        
        </_Title>
        <_MenuList>
          <_MenuItem>

          </_MenuItem>
        </_MenuList>
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
    background-color: #f7f7f7
`;

const _Title = styled.div`
position: fixed;
display: inline-block;
    width: 200px;
    height: 40px;
    font-size: 10px;
    background-color: #fd07074c
`;

const _MenuList = styled.div`
position: fixed;
display: inline-block;
    left: 200px;
    width: calc(100% - 200px);
    height: 40px;
    text-align: center;
    background-color: #0749fd42
`;

const _MenuItem = styled.div`
position: fixed;
display: inline-block;
    left: 200px;
    width: calc(100% - 200px);
    height: 40px;
    font-size: 10px;
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