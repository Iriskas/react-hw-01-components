import styled from '@emotion/styled';

export const ItemFriendList = styled.li`
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.4);
`;

export const FriendStatus = styled.span`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 100%;
`;

export const FriendPhoto = styled.img`
  width: 100px;
`;

export const FriendName = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
