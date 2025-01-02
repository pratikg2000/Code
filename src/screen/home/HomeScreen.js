// import {
//   Dimensions,
//   Image,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from '../../styles/StyleSheet';
// const {width} = Dimensions.get('window');

// const HomeScreen = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleScroll = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / width);
//     setCurrentIndex(currentIndex);
//   };
//   return (
//     <View style={{backgroundColor: 'white', flex: 1}}>
//       <ImageBackground
//         source={require('../../assests/Images/Group9404.png')}
//         style={styles.backImage}>
//         <Image
//           source={require('../../assests/Images/Group9937.png')}
//           style={styles.imgLaundry}
//         />

//         <Text style={styles.txtHello}>Hello Anmol</Text>

//         <Text style={styles.txtWelcome}>Welcome Back</Text>
//         <Image
//           source={require('../../assests/Images/Rectangle239.png')}
//           style={styles.profileImage}
//         />
//         <Image
//           source={require('../../assests/Images/Group7198.png')}
//           style={styles.notificationImage}
//         />
//       </ImageBackground>

//       <View style={styles.txtContainer}>
//         <Text style={styles.txtService}>Service</Text>
//         <TouchableOpacity>
//           <Text style={styles.txtSee}>See All</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView
//         horizontal
//         pagingEnabled
//         onScroll={handleScroll}
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={16}>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <View style={{marginLeft: scale(20)}}>
//             <View
//               style={{
//                 backgroundColor: ' rgba(125, 134, 226, 0.3)',
//                 width: scale(80),
//                 height: verticalScale(90),
//                 marginTop: verticalScale(20),
//                 borderRadius: scale(10),
//               }}>
//               <Image
//                 source={require('../../assests/Images/Group7212.png')}
//                 style={{
//                   width: scale(60),
//                   height: verticalScale(60),
//                   marginTop: verticalScale(15),
//                   marginLeft: scale(9),
//                 }}
//               />
//             </View>
//             <Text>Premium Wash</Text>
//           </View>
//           <View style={{marginLeft: scale(20)}}>
//             <View
//               style={{
//                 backgroundColor: ' rgba(247, 75, 85, 0.3)',

//                 width: scale(80),
//                 height: verticalScale(90),
//                 marginTop: verticalScale(20),
//                 borderRadius: scale(10),
//               }}>
//               <Image
//                 source={require('../../assests/Images/Group.png')}
//                 style={{
//                   width: scale(60),
//                   height: verticalScale(60),
//                   marginTop: verticalScale(15),
//                   marginLeft: scale(9),
//                 }}
//               />
//             </View>
//             <Text>Dry Cleaning</Text>
//           </View>
//           <View style={{marginLeft: scale(20)}}>
//             <View
//               style={{
//                 backgroundColor: 'rgba(245, 240, 187, 1)',
//                 width: scale(80),
//                 height: verticalScale(90),
//                 marginTop: verticalScale(20),
//                 borderRadius: scale(10),
//               }}>
//               <Image
//                 source={require('../../assests/Images/image25.png')}
//                 style={{
//                   width: scale(60),
//                   height: verticalScale(60),
//                   marginTop: verticalScale(15),
//                   marginLeft: scale(9),
//                 }}
//               />
//             </View>
//             <Text>Steaming</Text>
//           </View>
//           <View style={{marginLeft: scale(20)}}>
//             <View
//               style={{
//                 backgroundColor: 'rgba(245, 240, 187, 1)',
//                 width: scale(80),
//                 height: verticalScale(90),
//                 marginTop: verticalScale(20),
//                 borderRadius: scale(10),
//               }}>
//               <Image
//                 source={require('../../assests/Images/image25.png')}
//                 style={{
//                   width: scale(60),
//                   height: verticalScale(60),
//                   marginTop: verticalScale(15),
//                   marginLeft: scale(9),
//                 }}
//               />
//             </View>
//             <Text>Steaming</Text>
//           </View>
//           <View style={{marginLeft: scale(20)}}>
//             <View
//               style={{
//                 backgroundColor: 'rgba(245, 240, 187, 1)',
//                 width: scale(80),
//                 height: verticalScale(90),
//                 marginTop: verticalScale(20),
//                 borderRadius: scale(10),
//               }}>
//               <Image
//                 source={require('../../assests/Images/image25.png')}
//                 style={{
//                   width: scale(60),
//                   height: verticalScale(60),
//                   marginTop: verticalScale(15),
//                   marginLeft: scale(9),
//                 }}
//               />
//             </View>
//             <Text>Steaming</Text>
//           </View>
//         </View>
//       </ScrollView>
//       <View style={styles.dotContainer}>
//         <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
//         <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
//         <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;

// import React, {useState} from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
// } from 'react-native';

// // const {width} = Dimensions.get('window');

// const ServicesWithDots = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleScroll = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / width);
//     setCurrentIndex(currentIndex);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Service</Text>
//         <Text style={styles.headerLink}>See All</Text>
//       </View>

//       {/* Scrollable Cards */}
//       <ScrollView
//         horizontal
//         pagingEnabled
//         onScroll={handleScroll}
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={16}>
//         {/* Card 1 */}
//         <View style={styles.card}>
//           <Image
//             source={require('../../assests/Images/Group7212.png')} // Replace with your image path
//             style={styles.image}
//           />
//           <Text style={styles.cardText}>Premium Wash</Text>
//         </View>

//         {/* Card 2 */}
//         <View style={styles.card}>
//           <Image
//             source={require('../../assests/Images/Group7212.png')} // Replace with your image path
//             style={styles.image}
//           />
//           <Text style={styles.cardText}>Dry Cleaning</Text>
//         </View>

//         {/* Card 3 */}
//         <View style={styles.card}>
//           <Image
//             source={require('../../assests/Images/Group7212.png')} // Replace with your image path
//             style={styles.image}
//           />
//           <Text style={styles.cardText}>Steaming</Text>
//         </View>
//       </ScrollView>

//       {/* Dot Indicator */}
//       <View style={styles.dotContainer}>
//         <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
//         <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
//         <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
//       </View>
//     </View>
//   );
// };

// export default ServicesWithDots;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#4A4EB6',
//   },
//   headerLink: {
//     fontSize: 16,
//     color: '#4A4EB6',
//   },
//   card: {
//     // width: width * 0.6, // Adjust card width
//     marginRight: 16,
//     alignItems: 'center',
//     backgroundColor: '#F9F9F9',
//     borderRadius: 10,
//     padding: 16,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginBottom: 10,
//   },
//   cardText: {
//     fontSize: 16,
//     color: '#4A4EB6',
//     fontWeight: 'bold',
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#ccc',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#4A4EB6',
//   },
// });

import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      name: 'Premium Wash',
      image: require('../../assests/Images/Group7212.png'),
      bgColor: 'rgba(125, 134, 226, 0.3)',
    },
    {
      id: 2,
      name: 'Dry Cleaning',
      image: require('../../assests/Images/Group.png'),
      bgColor: 'rgba(247, 75, 85, 0.3)',
    },
    {
      id: 3,
      name: 'Steaming',
      image: require('../../assests/Images/image25.png'),
      bgColor: 'rgba(245, 240, 187, 1)',
    },
    {
      id: 4,
      name: 'Ironing',
      image: require('../../assests/Images/image25.png'),
      bgColor: 'rgba(245, 240, 187, 1)',
    },
    {
      id: 5,
      name: 'Folding',
      image: require('../../assests/Images/image25.png'),
      bgColor: 'rgba(245, 240, 187, 1)',
    },
  ];

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={require('../../assests/Images/Group9404.png')}
        style={styles.backImage}>
        <Image
          source={require('../../assests/Images/Group9937.png')}
          style={styles.imgLaundry}
        />

        <Text style={styles.txtHello}>Hello Anmol</Text>
        <Text style={styles.txtWelcome}>Welcome Back</Text>

        <Image
          source={require('../../assests/Images/Rectangle239.png')}
          style={styles.profileImage}
        />
        <Image
          source={require('../../assests/Images/Group7198.png')}
          style={styles.notificationImage}
        />
      </ImageBackground>

      <View style={styles.txtContainer}>
        <Text style={styles.txtService}>Service</Text>
        <TouchableOpacity>
          <Text style={styles.txtSee}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingHorizontal: scale(20)}}>
        {services.map((service, index) => (
          <View key={service.id} style={{marginHorizontal: scale(10)}}>
            <View
              style={{
                backgroundColor: service.bgColor,
                width: scale(80),
                height: verticalScale(90),
                borderRadius: scale(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={service.image}
                style={{
                  width: scale(60),
                  height: verticalScale(60),
                }}
              />
            </View>
            <Text style={{textAlign: 'center', marginTop: verticalScale(5)}}>
              {service.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Dot Indicator */}
      <View style={styles.dotContainer}>
        {services.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot, // Show active dot
              currentIndex !== index && {opacity: 0}, // Hide inactive dots
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backImage: {
    height: verticalScale(250),
    resizeMode: 'cover',
  },
  imgLaundry: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  txtHello: {
    fontSize: scale(18),
    color: '#333',
    marginTop: verticalScale(10),
    textAlign: 'center',
  },
  txtWelcome: {
    fontSize: scale(16),
    color: '#777',
    textAlign: 'center',
  },
  profileImage: {
    width: scale(40),
    height: scale(40),
    position: 'absolute',
    top: verticalScale(20),
    left: scale(20),
  },
  notificationImage: {
    width: scale(40),
    height: scale(40),
    position: 'absolute',
    top: verticalScale(20),
    right: scale(20),
  },
  txtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
  },
  txtService: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#333',
  },
  txtSee: {
    fontSize: scale(14),
    color: '#4A90E2',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#ccc',
    marginHorizontal: scale(5),
  },
  activeDot: {
    backgroundColor: '#4A90E2',
    opacity: 1,
  },
});
