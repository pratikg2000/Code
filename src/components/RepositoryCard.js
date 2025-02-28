import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/favoritesSlice';
import {colors, fonts} from '../theme';

const RepositoryCard = ({repository, onPress}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === repository.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(repository)); // Remove from favorites
    } else {
      dispatch(addFavorite(repository)); // Add to favorites
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <LinearGradient
        colors={['#ffffff', '#f5f5f5']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Image
          source={{uri: repository.owner.avatar_url}}
          style={styles.avatar}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.description}>{repository.description}</Text>
          <View style={styles.stats}>
            <Text style={styles.statText}>
              ⭐ {repository.stargazers_count}
            </Text>
            <Text style={styles.statText}>🍴 {repository.forks_count}</Text>
            <Text style={styles.statText}>📂 {repository.language}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}>
          <Icon
            name={isFavorite ? 'star' : 'star-o'}
            size={24}
            color={isFavorite ? colors.star : colors.textSecondary}
          />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  gradient: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.textSecondary,
    marginRight: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default RepositoryCard;
