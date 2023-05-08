import ProductCard from "./ProductCard";

import "../css/Main.css";

function MainTopList(props) {
  console.log(props.list);

  return <ProductCard list={props.list} />;
}

export default MainTopList;
