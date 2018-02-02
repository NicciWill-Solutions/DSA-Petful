import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import css from './Dashboard.css';
import * as catActions from './actions/cat';
import * as dogActions from './actions/dog';

export class Dashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(catActions.fetchCat());
    this.props.dispatch(dogActions.fetchDog());
  }

  render() {
    return(
    <div>
      <Pet
        type="cat"
        onAdoptPet={() => this.props.dispatch(catActions.adoptCat())}
        petToAdopt={this.props.cat}
      />
      <Pet 
        type="dog"
        onAdoptPet={() => this.props.dispatch(dogActions.adoptDog())}
        petToAdopt={this.props.dog}
      />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dogReducer.dogToAdopt,
    cat: state.catReducer.catToAdopt
  }
};

export default connect(mapStateToProps)(Dashboard);