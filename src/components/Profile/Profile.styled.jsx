import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 480px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 30px;
`;
export const ProfilePhoto = styled.img`
  width: 180px;
  padding-top: 50px;
  padding-bottom: 30px;
`;
export const UserName = styled.p`
  font-size: 34px;
  font-weight: 600;
`;

export const UserTag = styled.p`
  color: grey;
  font-size: 28px;
`;

export const UserLocation = styled.p`
  color: grey;
  font-size: 28px;
`;
export const StatsList = styled.ul`
  display: flex;
  font-size: 20px;
  justify-content: space-evenly;
  background-color: rgb(237, 232, 232);
`;
export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 49px;
  border: 1px solid #a0a0a0;
`;
export const LabelStats = styled.span`
  font-weight: 500;
  color: grey;
  font-size: 20px;
`;
export const QuantityStats = styled.span`
  font-weight: 600;
  font-size: 24px;
`;
