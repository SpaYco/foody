import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
  }

   handleClick = () => {
     const { search } = this.state;

     window.sessionStorage.setItem('search', search);
     this.setState({ search: '' });
     window.location.href = '/';
   };

   handleChange = e => {
     this.setState({ search: e.target.value });
   };

   render() {
     const { search } = this.state;
     return (
       <div id="search">
         <input id="search-text" data-testid="search-bar" type="text" onChange={this.handleChange} value={search} />
         <input id="search-btn" data-testid="search-btn" type="submit" value="&#x2315;" onClick={this.handleClick} />
       </div>
     );
   }
}

export default SearchBar;
