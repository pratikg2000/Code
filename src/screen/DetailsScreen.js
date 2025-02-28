import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/favoritesSlice';
import {colors, fonts} from '../theme';

const DetailsScreen = ({route}) => {
  const {repository} = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === repository.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(repository));
    } else {
      dispatch(addFavorite(repository));
    }
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#f5f5f5']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Animatable.View
            animation="fadeIn"
            duration={500}
            style={styles.favoriteButton}>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Icon
                name={isFavorite ? 'star' : 'star-o'}
                size={24}
                color={isFavorite ? colors.star : colors.textSecondary}
              />
            </TouchableOpacity>
          </Animatable.View>

          <Image
            source={{uri: repository.owner.avatar_url}}
            style={styles.avatar}
          />
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.description}>{repository.description}</Text>

          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Icon name="star" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Stars: {repository.stargazers_count}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Icon name="code-fork" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Forks: {repository.forks_count}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Icon name="file-code-o" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Language: {repository.language || 'N/A'}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Icon name="user" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Owner: {repository.owner.login}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
});

export default DetailsScreen;
