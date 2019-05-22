import React, { Component } from 'react';
import Group from './Group';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class GroupList extends Component {

  render() {

    const { groups } = this.props;

    return (
      <div className='container'>
        <ul className="collection with-header">
          <li className="collection-header"><h4 className='mx-auto'>Groups list</h4></li>
          <li className='collection-item'>
            <form className='nav-wrapper'>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </li>
          <Group groups={groups} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.firestore.ordered.groups
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'groups' }
  ])
)(GroupList)