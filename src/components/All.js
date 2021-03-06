import React from "react";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
import ItemThree from "./ItemThree";
import {
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
import "./All.css";
import { styled } from "@mui/system";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: red;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function All() {
  return (
    <div className="all">
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Item One</Tab>
          <Tab>Item Two</Tab>
          <Tab>Item Three</Tab>
        </TabsList>

        <TabPanel value={0}>
          <ItemOne />
        </TabPanel>

        <TabPanel value={1}>
          <ItemTwo />
        </TabPanel>

        <TabPanel value={2}>
          <ItemThree />
        </TabPanel>
      </TabsUnstyled>
    </div>
  );
}

//Unstyled
// <TabsUnstyled className="all" defaultValue={0}>
//   <TabsListUnstyled className="tabList">
//     <Tab>ItemOne</Tab>

//     <Tab>ItemTwo</Tab>

//     <Tab>ItemThree</Tab>
//   </TabsListUnstyled>

//   <TabPanelUnstyled value={0}>
//     <ItemOne />
//   </TabPanelUnstyled>

//   <TabPanelUnstyled value={1}>
//     <ItemTwo />
//   </TabPanelUnstyled>

{
  /* <TabPanelUnstyled value={2}>
        <ItemThree />
      </TabPanelUnstyled>
    </TabsUnstyled> */
}
