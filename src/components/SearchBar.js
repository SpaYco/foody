import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
  }

   handleClick = () => {
     const { updateIndex, updateSearch } = this.props;
     const { search } = this.state;
     updateSearch(search);
     updateIndex('home');
     this.setState({ search: '' });
   };

   handleChange = e => {
     this.setState({ search: e.target.value });
   };

   render() {
     const { search } = this.state;
     return (
       <div className="search">
         <input id="search-text" type="text" onChange={this.handleChange} value={search} />
         <input type="submit" value="&#x2315;" onClick={this.handleClick} />
       </div>
     );
   }
}

SearchBar.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
};

export default SearchBar;
