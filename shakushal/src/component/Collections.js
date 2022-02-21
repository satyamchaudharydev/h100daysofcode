import collection from '../data/collectionData'
import { AiOutlineArrowRight } from "react-icons/ai";
import Shopbtn from './Shopbtn';
import { Title } from './Title';
import { Collectionbtn } from './Collectionbtn';
const Collections = () => {
    return (
      <>
        <div className="collection-section product-home">
          <Title text={"Shop by"} span={" Collections"} />
          <div className="collection-wrap">
            <div className="collections">
              {collection.map((item, index) => {
                let position;
                if (index === 0) {
                  position = "first";
                }
                if (index === 1) {
                  position = "second";
                }
                if (index === 2) {
                  position = "third";
                }
                if (index === 3) {
                  position = "fourth";
                }
                if (index === 4) {
                  position = "fifth";
                }
                return (
                  <div className={`collection ${position}`}>
                    <div className="collection-img-section">
                      <img className="collection-img" src={item.img} alt="" />
                    </div>
                    <div className="text-section">
                      <div className="desc">{item.desc}</div>

                      <h1 className="title">{item.title}</h1>
                      <div className="collection-shop-btn line">
                        <p>Shop now</p>
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
              <Collectionbtn/>
          </div>
        </div>
      </>
    );
}
export default Collections