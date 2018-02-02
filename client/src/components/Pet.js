import React from 'react';

export default class Pet extends React.Component {
  render() {
    return (
      <section className="pet">
        <header>
            <h2>{this.props.petToAdopt.name}</h2>
            <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription}/>
        </header>
        <main>
          <h3>More About {this.props.petToAdopt.name}</h3>
          <dl>
            <dt>Sex:</dt>
            <dd>{this.props.petToAdopt.sex}</dd>
            <dt>Age:</dt>
            <dd>{this.props.petToAdopt.age}</dd>
            <dt>Breed:</dt>
            <dd>{this.props.petToAdopt.breed}</dd>
            <dt>Story:</dt>
            <dd>{this.props.petToAdopt.story}</dd>
          </dl>
          <button onClick={e => this.props.onAdoptPet(e)}>Adopt {this.props.petToAdopt.name}</button>
        </main>
      </section>
    );
  }
}

