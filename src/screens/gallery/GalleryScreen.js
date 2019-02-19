import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Modal
} from 'react-native';
import { List, ListItem } from 'native-base';
import { getImageList } from './components/dummy';
import { Spinner, Colors } from '../../common';
import GalleryImage from './components/GalleryImage';

import { images } from './components/dummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

class GalleryScreen extends Component {
  state = {
    gallery: null,
    modalImage: null,
    isLoading: true,
    isModalVisible: false
  };
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  async componentDidMount() {
    const gallery = images;
    // let imageArray = [];
    // gallery.forEach((el, i) => {
    //   let image = {
    //     id: i,
    //     uri: el
    //   };
    //   imageArray.push(image);
    // });
    this.setState({ gallery, isLoading: false });
  }

  toggleModal = (isVisible, index) => {
    if (index) {
      this.setState({ modalImage: this.state.gallery[index] });
    }
    this.setState({ isModalVisible: isVisible });
  };

  getImage = () => {
    return this.state.modalImage;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Spinner size="large" />
        </View>
      );
    }
    console.log('===============');
    console.log('this.state.gallery:', this.state.gallery);
    console.log('===============');
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.isModalVisible}
          style={styles.modal}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => this.toggleModal(false)}
              style={styles.closeButton}
            >
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
            <GalleryImage source={this.state.modalImage} />
          </View>
        </Modal>

        {this.state.gallery.map((image, i) => {
          return (
            <TouchableWithoutFeedback
              key={i}
              onPress={() => this.toggleModal(true, i)}
            >
              <View style={styles.imageWrapper}>
                <GalleryImage source={image} />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },
  imageWrapper: {
    width: Dimensions.get('window').width / 3 - 4,
    height: Dimensions.get('window').height / 3 - 4,
    padding: 5,
    backgroundColor: '#fff'
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  closeButton: {
    alignSelf: 'center',
    height: 26,
    width: 26,
    marginBottom: 20
  }
});

export default GalleryScreen;
