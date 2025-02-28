import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import RepositoryCard from '../components/RepositoryCard';
import {colors, fonts} from '../theme';

const FavoritesScreen = ({navigation}) => {
  const favorites = useSelector(state => state.favorites);

  return (
    <LinearGradient
      colors={['#ffffff', '#f5f5f5']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorites yet!</Text>
          <Text style={styles.emptySubText}>
            Start adding favorites from the search screen.
          </Text>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.searchButtonText}>Go to Search</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RepositoryCard
              repository={item}
              onPress={() => navigation.navigate('Details', {repository: item})}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
    marginBottom: 10,
  },
  emptySubText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
  },
  searchButtonText: {
    color: '#ffffff',
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  listContainer: {
    padding: 10,
  },
});

export default FavoritesScreen;
