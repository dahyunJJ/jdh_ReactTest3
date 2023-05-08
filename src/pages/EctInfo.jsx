import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import InfoDescription from "./InfoDescription";
import InfoAditional from "./InfoAditional";
import ProductCard from "./ProductCard";

function EctInfo() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Description" title="Description">
        <InfoDescription />
      </Tab>
      <Tab eventKey="Aditional information" title="Aditional information">
        <InfoAditional />
      </Tab>
      <Tab eventKey="Reviews(0)" title="Reviews(0)" disabled>
        <ProductCard />
      </Tab>
    </Tabs>
  );
}

export default EctInfo;
