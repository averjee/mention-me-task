import { Container } from "react-bootstrap";
import DataSearchList from "../../shared/components/DataSearchList/DataSearchList";

import { data } from "./data.json";

const onClick = () => {
  alert("Roar!");
};

const MerchantListPage = () => {
  return (
    <Container className="mt-4">
      <h4>Merchant List</h4>
      <DataSearchList
        accessor="merchantName"
        data={data.merchants}
        onClick={onClick}
      />
    </Container>
  );
};

export default MerchantListPage;
