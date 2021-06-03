import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDetail = (num) => history.push(`/page1/detail${num}`);

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      {/* <Link to="/page1/detailA">DetailA</Link> */}
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={() => onClickDetail("A")}>DetailA</button>
      <button onClick={() => onClickDetail("B")}>DetailB</button>
    </div>
  );
};
