import { useParams } from "react-router-dom";
import { useState } from "react";

import EctInfo from "./EctInfo";

import "../css/Main.css";

function Detail(props) {
  let { id } = useParams();
  let data = props.list[id];

  let [count, setCount] = useState(0);
  return (
    <>
      <section className="pdDetail mw">
        <div className="pdImg">
          <img
            src={`${process.env.PUBLIC_URL}/img/${data.img}`}
            alt={data.title}
          />
        </div>
        <div className="detailCon">
          <div className="detailConTitle">
            <span>상품명 : </span>
            {data.title}
          </div>
          <div className="detailConPrice">
            <span>상품가격 : </span>
            {data.price}
          </div>
          <div className="btnCount">
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <span>Add to Cart</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta nemo enim eius, quam esse voluptatibus rem! Cupiditate
            reprehenderit facere culpa expedita voluptates quod esse, id
            perferendis nostrum deserunt dicta!
          </p>
        </div>
      </section>

      {/* <EctInfo /> */}
    </>
  );
}

export default Detail;
