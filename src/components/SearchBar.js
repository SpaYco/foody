import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
  }

   handleClick = () => {
     const { updateIndex } = this.props;
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
         <input type="text" onChange={this.handleChange} value={search} />
         <input type="submit" value="&#x2315;" onClick={this.handleClick} />
       </div>
     );
   }
}

export default SearchBar;
