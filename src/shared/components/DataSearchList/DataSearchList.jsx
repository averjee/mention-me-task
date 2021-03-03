import React, { useCallback, useState } from "react";

import PropTypes from "prop-types";

import { ListGroup, Form } from "react-bootstrap";

/**
 * @param {Array<Object>} data An array of objects that we want to search
 * @param {Function} onClick The function to trigger with the clicked result
 * @param {string} accessor The key to use as the display label for each item
 */
const DataSearchList = ({ data, onClick, accessor = "name" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <>
      <Form.Control
        name="searchTerm"
        type="text"
        placeholder="Search Term"
        value={searchTerm}
        onChange={onChange}
      />
      <br />
      <ListGroup>
        {data.map((item) => (
          <ListGroup.Item key={item.id} action onClick={onClick}>
            {item[accessor]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

DataSearchList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  accessor: PropTypes.string
};

export default DataSearchList;
