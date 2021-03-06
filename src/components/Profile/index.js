import React from "react";
import { StatusBar } from "react-native";

import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

import ParallaxScrollView from "react-native-parallax-scroll-view";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values'
      ])
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>

            <ListView
              ref="ListView"
              style={styles.container}
              dataSource={ this.state.dataSource }
              renderRow={(rowData) => (
                <View key={rowData} style={ styles.row }>
                  <Text style={ styles.rowText }>
                    { rowData }
                  </Text>
                </View>
               )}
              renderScrollComponent={props => (
                <ParallaxScrollView
                  onScroll={onScroll}

                  headerBackgroundColor="#333"
                  stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                  parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                  backgroundSpeed={10}

                  renderBackground={() => (
                    <View key="background">
                      <Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                                      width: window.width,
                                      height: PARALLAX_HEADER_HEIGHT}}/>
                      <View style={{position: 'absolute',
                                    top: 0,
                                    width: window.width,
                                    backgroundColor: 'rgba(0,0,0,.4)',
                                    height: PARALLAX_HEADER_HEIGHT}}/>
                    </View>
                  )}

                  renderForeground={() => (
                    <View key="parallax-header" style={ styles.parallaxHeader }>
                      <Image style={ styles.avatar } source={{
                        uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE
                      }}/>
                      <Text style={ styles.sectionSpeakerText }>
                        Talks by Rich Hickey
                      </Text>
                      <Text style={ styles.sectionTitleText }>
                        CTO of Cognitec, Creator of Clojure
                      </Text>
                    </View>
                  )}

                  renderStickyHeader={() => (
                    <View key="sticky-header" style={styles.stickySection}>
                      <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
                    </View>
                  )}
                />
              )}
            />

      </Container>

    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: '#FFF',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: '#FFF',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: '#FFF',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});
