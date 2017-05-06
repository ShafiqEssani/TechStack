import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
        );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// const mapStateToProps = state => {
//   return { SelectedLibraryId: state.SelectedLibraryId };
// }

const mapStateToProps = (state, ownProps) => {
  // 2nd argument ownProps are the props is passed to the Component that we're wrapping
  // ownProps object is exactly equal to this.props inside of the component
  // remove all logic from the component entirely.

  const expanded = state.SelectedLibraryId === ownProps.library.id;
  return { expanded };
};

// no mapStateToProps here thats why null, 2nd is entire actions object
export default connect(mapStateToProps, actions)(ListItem);
//now pass these actions to our components as as props.
