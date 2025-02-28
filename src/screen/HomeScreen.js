import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Searchbar, Button} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import RepositoryCard from '../components/RepositoryCard';
import {colors, fonts} from '../theme';

const HomeScreen = ({navigation}) => {
  const [repositories, setRepositories] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  const searchRepositories = async query => {
    if (!isConnected) {
      return;
    }

    if (!query.trim()) {
      setHasSearched(false);
      setRepositories([]);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`,
      );
      setRepositories(response.data.items);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setRepositories([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#f5f5f5']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Searchbar
        placeholder="Search repositories..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={() => searchRepositories(searchQuery)}
        style={styles.searchBar}
      />

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Favorites')}
        style={styles.favoritesButton}
        labelStyle={styles.favoritesButtonText}>
        View Favorites
      </Button>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      ) : !isConnected ? (
        <Text style={styles.errorText}>No internet connection.</Text>
      ) : hasSearched && repositories.length === 0 ? (
        <Text style={styles.errorText}>
          {repositories.length === 0 && !isLoading
            ? 'No repositories found.'
            : 'Please enter a search term.'}
        </Text>
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RepositoryCard
              repository={item}
              onPress={() => navigation.navigate('Details', {repository: item})}
            />
          )}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    margin: 10,
    elevation: 2,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: colors.error,
    fontFamily: fonts.medium,
  },
  favoritesButton: {
    margin: 10,
    backgroundColor: colors.secondary,
  },
  favoritesButtonText: {
    color: '#ffffff',
    fontFamily: fonts.medium,
  },
});

export default HomeScreen;
