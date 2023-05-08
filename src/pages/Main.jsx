import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main(props) {
  // console.log(props.list);
  return (
    <>
      <MainEvent />
      <MainTopList list={props.list} />
    </>
  );
}

export default Main;
