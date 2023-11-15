import { Helmet } from "react-helmet-async"
import Cover from "../../../shared/Cover/Cover"
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu"
import useMenu from "../../hooks/useMenu"

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
          <Helmet>
            <title>Bistro Boss | Our Menu</title>
          </Helmet>
          <Cover img={menuImg} title="Our Menu"></Cover>
          <PopularMenu></PopularMenu>
        </div>
    )
}

export default Menu