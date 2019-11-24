import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBox from './search-box';

const SearchBoxContainer = props => {
  const onSearchHandler = value => {
    props.history.push(`/movies/search/${value}`);
  };
  return (
    <SearchBox
      {...props}
      onSearch={onSearchHandler}
      query={props.match.params.query}
    />
  );
};

const mapStatetoProps = state => {
  const { loading } = state.search || {};
  return {
    loading
  };
};
export default withRouter(connect(mapStatetoProps)(SearchBoxContainer));
