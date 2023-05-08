import { Link } from "react-router-dom";

function ProductCard(props) {
  console.log(props.list);
  let dataList = props.list.filter((a) => a.category === "top");

  return (
    <>
      <section className="cardCon mw">
        <div className="cardTitle">
          <h1>Shop The Latest</h1>
          <Link to="/Shop" className="btnAll">
            View All
          </Link>
        </div>
        <div className="cardList">
          {dataList.map((a, _i) => {
            return (
              <div className="cardInnerList" key={a._id}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                  alt={a.title}
                />
                <p>{a.title}</p>
                <p>{a.price}</p>
                <Link to={`/detail/${a._id}`} className="btnDetail">
                  Add to Cart
                </Link>
                <span>Add to Cart</span>
              </div>
            );
          })}
          ;
        </div>
      </section>
    </>
  );
}

export default ProductCard;
