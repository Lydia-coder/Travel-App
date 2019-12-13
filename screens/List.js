import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  Platform
} from "react-native";
import * as theme from "../theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
//mported the Font Awesome icon package in the form of FontAwesome component. And, we have also imported the Octicons icon package as Octicons component.

const { height, width } = Dimensions.get("screen"); //his component allows us to take the full width and height of the app screen.

const destinations = [
  // mock destinations
  {
    id: 1,
    user: {
      name: "Lisa Smith",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    saved: true,
    location: "Mt. Fuji, Japan",
    temperature: 8,
    title: "Mt. Fuji, Japan",
    description:
      "Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1574236170901-59c2f5c99c75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80",

      "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80",

      "https://images.unsplash.com/photo-1574236170878-f66e35f83207?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Mindy Janssen",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    saved: false,
    location: "Tokyo, Japan",
    temperature: 10,
    title: "Tokyo, Japan",
    description:
      "Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo. Prior to 1868, Tokyo was known as Edo.",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    images: [
      "https://images.unsplash.com/photo-1573456526391-4a1ca23009df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1536183801678-ecc5eaf42bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Rick Holland ",
      avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    saved: true,
    location: "Osaka, Japan",
    temperature: 8,
    title: "Osaka, Japan",
    description:
      "Osaka (大阪, Ōsaka) is Japan's second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. ... Before the Nara Period, when the capital used to be moved with the reign of each new emperor, Naniwa was once Japan's capital city, the first one ever known.",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80",
    images: [
      "https://images.unsplash.com/photo-1542210940661-5f91cb7afe02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      "https://images.unsplash.com/photo-1550037936-4ad05c4fd400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
      "https://images.unsplash.com/photo-1540398254482-e12d95cc76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ]
  },
  {
    id: 4,
    user: {
      name: "Ramsey Chapta",
      avatar: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    location: "Kyoto, Japan",
    temperature: 14,
    title: "Kyoto, japan",
    description:
      "Kyoto, located in the Kansai region of Japan, is the country's seventh largest city, with a population of 1.4 million people. Steeped in history, Kyoto is home to roughly one quarter of Japan's national treasures, countless shrines and temples, and seventeen sites recognized by UNESCO as World Heritage Sites.",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1503640538573-148065ba4904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1512136332365-52232e3e5e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      "https://images.unsplash.com/photo-1484189282192-2d8dea38b614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1544158033-a9e9268fbb10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    ]
  }
];

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center"
  },
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  articles: {},
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: "bold"
  },
  destinations: {
    flex: 2,
    justifyContent: "space-between",
    paddingBottom: 30
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.66,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: 20,
    borderRadius: 12
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: 10,
    bottom: 20, //In iOS platform, bottom : -36
    left: theme.sizes.padding,
    right: theme.sizes.padding,
    backgroundColor: theme.colors.white
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: "transparent"
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active
  },
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.sizes.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  recommendationTemp: {
    fontSize: 14 * 1.25,
    color: theme.colors.white
  }
});

export default class List extends React.Component {
  //This variable will store our animation value for horizontal animation
  scrollX = new Animated.Value(0);
  //set up a header section by using the navigationOptions object provided by navigator
  // This object configures the headers as well as other elements as per the specific navigator that we use
  static navigationOptions = {
    header: (
      <View style={[styles.row, styles.header]}>
        <View>
          <Text style={{ color: theme.colors.caption }}>Search for place</Text>
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Destination</Text>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
            }}
          />
        </View>
      </View>
    )
  };

  renderDestinations() {
    //separate function called renderDestinations() .
    //This function will return the template for the Destinations Section in List screen
    //call this function in our render() function
    return (
      <View style={[styles.flex, styles.column]}>
        <FlatList
          horizontal
          pagingEnabled //When its value is true, the scroll view stops on multiples of the scroll view’s size when scrolling. The default value is false.
          scrollEnabled //When its value is false, the view cannot be scrolled via touch interaction. The default value is true.
          showsHorizontalScrollIndicator={false} //When its value is false, the horizontal scroll bar at the bottom does not show up
          scrollEventThrottle={16} // this prop is used to controls how often the scroll event will be fired while scrolling
          // (as a time interval in ms). A lower number corresponds to better accuracy for code that
          // is tracking the scroll position.

          snapToAlignment="center" //This prop will define the relationship of the snapping to the scroll view.
          // style={{ overflow : 'visible' }} //In IOS platform
          data={destinations}
          decelerationRate={0} //prop is a floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger
          keyExtractor={(item, index) => `${item.id}`} //The keyExtractor prop is used to identify each item in the list uniquely
          renderItem={({ item }) => this.renderDestination(item)}
          //the renderItem prop function returns the required template which in this case is calling the renderDestination() function
          //with the item parameter.
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          //Here, we have used the event function of the Animated component which takes the nativeEvent as a parameter. Then, we have defined
          //the contentOffset value according to the scrollX variable inside the nativeEvent config.
        />
        {this.renderDots()}
      </View>
    );
  }

  renderDestination(item) {
    //a function called renderDestination(item) that will return the template for each destination.
    //item parameter will include each data object item from the destinations array that we defined above.
    //Then, we have used the item data in order to implement a simple template. The template includes an ImageBackground
    //component that wraps a View component. This ImageBackground component is used to set the background image on the app screen.
    //The View component wraps the child  View components with
    //Text component for the destination information.
    //wrapped the entire Destination card template by the TouchableOpacity component.
    //Then, we have added the activeOpacity prop to the TouchableOpacity component to give the opaque effect while clicking.
    //In the onPress event of the TouchableOpacity component,
    //we have configured the navigation using the navigate function provided by navigation prop.
    //The navigation prop is automatically available to all the screens which are configured to our Navigator.

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          () => this.props.navigation.navigate("Article", { article: item }) // link to article
        }
      >
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View
              style={[
                styles.column,
                { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }
              ]}
            >
              <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                {item.user.name}
              </Text>
              <Octicons
                name="location"
                size={theme.sizes.font * 0.8}
                color={theme.colors.white}
              />

              <Text style={{ color: theme.colors.white }}>{item.location}</Text>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text
              style={{
                fontSize: theme.sizes.title,
                fontWeight: "500",
                paddingBottom: 8
              }}
            >
              {item.title}
            </Text>
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", alignItems: "flex-end" }
              ]}
            >
              <Text style={{ color: theme.colors.caption }}>
                {item.description.split("").slice(0, 50)}...
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  renderDots() {
    // This renderDots() function returns the template for the delimiter dots. Here, we have added a parent View component that wraps the iteration of View
    // component for each item in the destinations data array. We have used the map() array function to iterate through each item in the destinations array data.
    // This allows us to define the number of dots as per the number of items in the destinations array data. The map() function returns the View component
    // to render  delimiter dots for each item
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          { justifyContent: "center", alignItems: "center", marginTop: 10 }
        ]}
      >
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth }
              ]}
            />
          );
        })}
      </View>
    );
    //we have defined a constant called borderWidth  which is initialized to the interpolate() function of the dotPosition constant initlized to
    //Animated.divide. The interpolate() function takes inputRange, outputRange and extrapolate as parameter values.  The interpolate() function
    //permits input ranges to map to different output ranges. Then, we have also added Animated component to our View component with borderWidth
    //style property
  }

  renderRecommended() {
    //his function will return the template for the Recommended Section in our List screen
    //call this function in our render() function
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          {/* <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity> */}
        </View>
        <View style={[styles.column]}>
          <FlatList // making it scrollable
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) =>
              this.renderRecommendation(item, index)
            }
          />
        </View>
      </View>
    );
  }

  renderRecommendation(item, index) {
    //This function will return the template for the Recommendation cards.
    //This template will hold the image and information section for our Recommendation section.
    //This function takes the item parameter which is a data item from our destinations data array.
    //This parameter is used to implement all the content materials inside the Recommendation card section.
    // added the Octicons component to add the icon from the Octicons package.
    //We have selected the location icon of the Octicons icon package.
    // The size and color props are also configured in the Octicons component.
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null
        ]}
      >
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image
            style={[styles.recommendationImage]}
            source={{ uri: item.preview }}
          />
          <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
            <Text style={styles.recommendationTemp}>{item.temperature}℃</Text>
            <FontAwesome
              name={item.saved ? "bookmark" : "bookmark-o"} //added the FontAwesome component which enables us to set the FontAwesome icons.
              //also added the color and size props to the FontAwesome component.
              color={theme.colors.white}
              size={theme.sizes.font * 1.25}
            />
          </View>
        </View>
        <View
          style={[
            styles.flex,
            styles.column,
            styles.shadow,
            { justifyContent: "space-evenly", padding: theme.sizes.padding / 2 }
          ]}
        >
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: "500",
              paddingBottom: theme.sizes.padding / 4.5
            }}
          >
            {item.title}
          </Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View
            style={[
              styles.row,
              {
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: theme.sizes.margin
              }
            ]}
          >
            <Text style={{ color: theme.colors.active }}>
              {" "}
              {this.renderRatings(item.rating)}
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    );
  } // implemented description: title, location,temp,rating

  renderRatings(rating) {
    //Here, in the renderRatings() function we have initialized a new Array variable called stars which can take up to 5 values.
    //This function takes ratings as a parameter. Then, we have used the map() array function which enables us to iterate through each item of stars array.
    //Inside the map() function, we have defined a new constant that stores the activeStars in order to give style accordingly. Then, we have returned
    //the FontAwesome component with star icons. The FontAwesome component is configured with key and color props. The key prop to identify each item
    //in array uniquely. And, the color is based on the activeStar constant.
    //Now, we need to call this renderRatings() function in the renderRecommendation()
    const stars = new Array(5).fill(0); //The fill() method fills the specified elements in an array with a static value.You can specify the position 
    //of where to start and end the filling. If not specified, all elements will be filled.
    return stars.map((value, index) => {
      const activeStar = index < rating;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          color={theme.colors[activeStar ? "active" : "gray"]}
        />
      );
    });
  }
  render() {
    return (
      <View>
        <Text>List Screen</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    );
  }
}
