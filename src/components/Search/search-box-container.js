import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBox from './search-box';

const SearchBoxContainer = props => {
  const onSearchHandler = value => {
    props.history.push(`/movies/search/${value}`);
  };
  return <SearchBox {...props} onSearch={onSearchHandler} />;
};

const mapStatetoProps = state => {
  const { query, loading } = state.search || {};
  return {
    loading,
    query
  };
};
export default withRouter(connect(mapStatetoProps)(SearchBoxContainer));
