import Banner from "../../../shared/NavBar/Banner/Banner"
import Category from "../Category/Category"
import PopularMenu from "../PopularMenu/PopularMenu"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Home