import {connect} from 'react-redux';
import SearchBar from './search';
import { searchConcerts } from '../../actions/search_actions'

// const mSTP = (state) => ({

// });

const mDTP = dispatch => ({
  searchConcerts: (search) => dispatch(searchConcerts(search))
});

export default connect(null, mDTP)(SearchBar);