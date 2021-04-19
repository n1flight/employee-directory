import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'

function Search(props) {

  return (
    <InputGroup className="search-styles mb-3">
      <FormControl className="center"
        placeholder="Filter List By Country"
        aria-label="Country Name"
        aria-describedby="basic-addon1"
        onChange={(e)=> props.findCountry(e.target.value)}
      />
    </InputGroup>
  )
  
}

export default Search