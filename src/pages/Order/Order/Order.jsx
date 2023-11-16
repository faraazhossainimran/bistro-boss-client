import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../../shared/Cover/Cover";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')
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
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={dessert}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={drink}></OrderTab></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
