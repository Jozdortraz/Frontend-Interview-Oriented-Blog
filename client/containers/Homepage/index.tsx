import React from 'react';

class Homepage extends React.Component {
  render() {
    return <div className="Homepage">
      <h1 className="Homepage__title">FIOS</h1>
      <h3 className="Homepage__sub-title">
        Blog for Front-End Interviews.
        <br />
        That's why we call it FIOS(Front-End Interview Oriented System).
      </h3>
    </div>;
  }
}

export default Homepage;