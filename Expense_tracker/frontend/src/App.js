import React, { useState, useMemo } from "react";
import styled from "styled-components";
import cat1 from "./img/cat1.jpeg";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import { ThemeProvider } from "./styles/themeContext";
function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <ThemeProvider>
      <AppStyled cat1={cat1} className="App">
        <MainLayout>
          <Navigation active={active} setActive={setActive} mode="dark" />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </ThemeProvider>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
