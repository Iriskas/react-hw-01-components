import PropTypes from 'prop-types';
import {
  ItemFriendList,
  FriendStatus,
  FriendPhoto,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriendList>
      <FriendStatus
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></FriendStatus>
      <FriendPhoto src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </ItemFriendList>
  );
};

FriendListItem.protoType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
