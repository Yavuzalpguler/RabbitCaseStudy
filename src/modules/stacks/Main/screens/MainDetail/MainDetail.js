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

  const getStringAfterString = (string, afterString) => {
    var rightHandSide = string.split(afterString)[1];
    return rightHandSide.split('/default.jpg')[0];
  };

  const shapeYoutubeUrl = (videoId, ab_channel) => {
    return `https://www.youtube.com/watch?v=${getStringAfterString(
      videoId,
      'https://i.ytimg.com/vi/',
    )}&ab_channel=${deleteSpacesBetweenWords(ab_channel)}`;
  };

  const renderVideoItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.videoItemWrapper}
        key={index}
        onPress={() => {
          Linking.canOpenURL(
            shapeYoutubeUrl(
              item?.snippet?.thumbnails?.default?.url,
              item?.snippet?.channelTitle,
            ),
          ).then(supported => {
            if (supported) {
              Linking.openURL(
                shapeYoutubeUrl(
                  item?.snippet?.thumbnails?.default?.url,
                  item?.snippet?.channelTitle,
                ),
              );
            } else {
              alert(
                "Don't know how to open URI: " +
                  shapeYoutubeUrl(
                    item?.snippet?.thumbnails?.default?.url,
                    item?.snippet?.channelTitle,
                  ),
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
        style={{marginTop: widthPercentage(5)}}
        contentContainerStyle={{paddingBottom: widthPercentage(15)}}
      />
    </SafeAreaView>
  );
};

export default MainDetail;
