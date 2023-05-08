import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllList(props) {
  let data = props.list;
  let [dataList, setDataList] = useState(data);

  return (
    <>
      <section className="CateCon mw">
        <h1>Shop The Latest</h1>
        <nav className="shopLnb">
          <button
            onClick={() =>
              setDataList([...dataList].sort((a, b) => a._id - b._id))
            }
          >
            등록순
          </button>
          <button
            onClick={() =>
              setDataList([...dataList].sort((a, b) => b.price - a.price))
            }
          >
            낮은 가격
          </button>
          <button
            onClick={() =>
              setDataList([...dataList].sort((a, b) => a.price - b.price))
            }
          >
            높은 가격
          </button>
          <button
            onClick={() =>
              setDataList([...dataList].sort((a, b) => b.discount - a.discount))
            }
          >
            높은 할인율
          </button>
        </nav>
        <div className="cardList">
          {dataList.map((item) => {
            return (
              <div className="cardInnerList" key={item._id}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                  alt={item.title}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <Link to={`/detail/${item._id}`} className="btnDetail">
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

export default AllList;
