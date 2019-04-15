import React, { Component } from 'react';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      search: '',
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    const data = {
      [name]: value,
    };
    this.setState(data);
    this.props.onSearch(this.state);
  };

  render() {
    const { search } = this.state;
    return (
      <Row>
        <div>
          <Col>
            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                placeholder="Search here"
                name="search"
                aria-label="Giphy Term"
                aria-describedby="basic-addon1"
                value={search}
                onChange={this.handleChange}
              />
            </InputGroup>
          </Col>
        </div>
      </Row>
    );
  }
}

export default SearchComponent;
