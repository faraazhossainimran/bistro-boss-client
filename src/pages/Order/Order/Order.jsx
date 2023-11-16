import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../../shared/Cover/Cover";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Cover img={orderCoverImg} title="Order food"></Cover>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
