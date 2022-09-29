import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
  getYoutubeTrendingVideos,
  paginateYoutubeTrendingVideos,
  searchYoutubeTrendingVideos,
  updateMainCustomState,
} from '../../../+store/Main/Main.actions';
import {widthPercentage} from '../../../../../constants/StyleVariables';
import SearchBar from '../../components/SearchBar/SearchBar';
import useDebounce from '../../../../../common/customHook/useDebounce';
import styles from './styles';
const MainDetail = props => {
  const {route} = props;
  const {country, alpha2} = route.params;
  const data = useSelector(state => state.main.youtubeTrendingVideos);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getYoutubeTrendingVideos(alpha2));
  }, []);

  const renderBackButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
          dispatch(
            updateMainCustomState('youtubeTrendingVideos', {
              success: null,
              loading: true,
            }),
          );
        }}
        style={styles.backWrapper}>
        <Text style={styles.backButton}>{'<'}</Text>
      </TouchableOpacity>
    );
  };

  const handleSearch = value => {
    setSearchValue(value);
  };
  useDebounce(
    () => {
      dispatch(searchYoutubeTrendingVideos(alpha2, searchValue));
    },
    1000,
    [searchValue],
  );

  const deleteSpacesBetweenWords = string => {
    return string.replace(/\s+/g, '');
  };

  const shapeYoutubeUrl = (videoId, ab_channel) => {
    return `https://www.youtube.com/watch?v=${videoId}&ab_channel=${deleteSpacesBetweenWords(
      ab_channel,
    )}`;
  };

  const triggerPagination = () => {
    const {nextPageToken} = data;
    if (nextPageToken) {
      dispatch(paginateYoutubeTrendingVideos(alpha2, nextPageToken));
    }
  };

  const renderVideoItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.videoItemWrapper}
        key={index}
        onPress={() => {
          Linking.canOpenURL(
            shapeYoutubeUrl(item?.id, item?.snippet?.channelTitle),
          ).then(supported => {
            if (supported) {
              Linking.openURL(
                shapeYoutubeUrl(item?.id, item?.snippet?.channelTitle),
              );
            } else {
              alert(
                "Don't know how to open URI: " +
                  shapeYoutubeUrl(item?.id, item?.snippet?.channelTitle),
              );
            }
          });
        }}>
        <Image
          style={styles.thumbNail}
          source={{
            uri: item?.snippet?.thumbnails?.default?.url,
          }}
          resizeMode={'contain'}
        />

        <Text style={[styles.videoDesc]}>{item?.snippet?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      {renderBackButton()}
      <SearchBar
        value={searchValue}
        onChangeText={value => handleSearch(value)}
        isLoading={data?.loading}
      />

      <FlatList
        data={data?.items}
        renderItem={renderVideoItem}
        keyExtractor={item => item?.id?.videoId}
        key={item => item?.id?.videoId}
        style={{marginTop: widthPercentage(5)}}
        contentContainerStyle={{paddingBottom: widthPercentage(15)}}
        onEndReached={triggerPagination}
        onEndReachedThreshold={0.8}
      />
    </SafeAreaView>
  );
};

export default MainDetail;
