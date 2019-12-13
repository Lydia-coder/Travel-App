import React, { Component } from "react";
import {
  Text,
  StyleSheet,//is an abstraction similar to CSS StyleSheets. Instead of creating a new style object every time, StyleSheet helps to create style 
  //objects with an ID which is further used to reference instead rendering it again.
  View,//is the fundamental component of React Native for building a user interface. It is a container that supports layout with flexbox, 
  //style, touch handling, and accessibility controls. 
  Animated,//The Animated library is designed to make animations fluid, powerful, and painless to build and maintain.
  Image,
  Dimensions,//helps to detect android or ios device screen width and height in very easy way.
  ScrollView,//The ScrollView is a generic scrolling container that can contain multiple components and views.
  TouchableOpacity //A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming 
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as theme from "../theme";
// import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  flex: {
    flex: 0
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  contentHeader: {
    backgroundColor: "transparent",
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 1.2,
  },
  avatar: {
    position: "absolute",
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 36,
    right: 0,
    left: 0
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray
  },
  title: {
    fontSize: theme.sizes.font * 1.7,
    fontWeight: "bold"
  },
  description: {
    fontSize: theme.sizes.font * 1.1,
    lineHeight: theme.sizes.font * 1.4,
    color: theme.colors.caption
  }
});

class Article extends Component {
  scrollX = new Animated.Value(0); //This variable will store our animation value for horizontal animation

  static navigationOptions = ({ navigation }) => {
    //set up a header section by using the navigationOptions object provided by navigator
    // This object configures the headers as well as other elements as per the specific navigator that we use
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome
              name="chevron-left"
              color={theme.colors.white}
              size={theme.sizes.font * 1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="more-horiz"
              color={theme.colors.white}
              size={theme.sizes.font * 1.5}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true
    };
  };

  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam("article");
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[styles.flex, styles.row, styles.dotsContainer]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          );
        })}
      </View>
    );
  };

  renderRatings = rating => {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
          style={{ marginRight: 4 }}
        />
      );
    });
  };

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam("article");

    return (
      <View style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled//When its value is true, the scroll view stops on multiples of the scroll view’s size when scrolling. The default value is false.
            scrollEnabled 
            showsHorizontalScrollIndicator={false}//When its value is false, the horizontal scroll bar at the bottom does not show up
            decelerationRate={0}//prop is a floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger
            scrollEventThrottle={16} // this prop is used to controls how often the scroll event will be fired while scrolling
             // (as a time interval in ms). A lower number corresponds to better accuracy for code that
          // is tracking the scroll position.
            snapToAlignment="center"//This prop will define the relationship of the snapping to the scroll view.
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } }
            ])}
          >
            {article.images.map((img, index) => (
              <Image
                key={`${index}-${img}`}
                source={{ uri: img }}
                resizeMode="cover"
                style={{ width, height: width }}
              />
            ))}
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <Image
              style={[styles.avatar, styles.shadow]}
              source={{ uri: article.user.avatar }}
            />
            <Text style={styles.title}>{article.title}</Text>
            <View
              style={[
                styles.row,
                { alignItems: "center", marginVertical: theme.sizes.margin / 3 }
              ]}
            >
              {this.renderRatings(article.rating)}
              <Text style={{ color: theme.colors.active }}>
                {article.rating}
              </Text>
              <Text style={{ marginLeft: 8, color: theme.colors.caption }}>
                ({article.reviews} reviews)
              </Text>
            </View>
            <ScrollView
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: this.scrollX } } }
              ])}
            >
              <Text style={styles.description}>{article.description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Article;
