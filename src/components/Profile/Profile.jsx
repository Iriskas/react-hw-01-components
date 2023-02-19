import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  ProfilePhoto,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  ItemList,
  LabelStats,
  QuantityStats,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <ProfilePhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <ItemList>
          <LabelStats>Followers</LabelStats>
          <QuantityStats>{followers}</QuantityStats>
        </ItemList>
        <ItemList>
          <LabelStats>Views</LabelStats>
          <QuantityStats>{views}</QuantityStats>
        </ItemList>
        <ItemList>
          <LabelStats>Likes</LabelStats>
          <QuantityStats>{likes}</QuantityStats>
        </ItemList>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
