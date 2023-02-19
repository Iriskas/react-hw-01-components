import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  background-color: white;
  text-align: center;
  border-radius: 10px;
  width: 480px;
  overflow: hidden;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const TitleStatistics = styled.h2`
  font-size: 36px;
  color: #808080;
  padding: 40px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  color: white;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

export const StatLabel = styled.span`
  font-size: 18px;
`;

export const StatPercentage = styled.span`
  font-size: 31px;
`;
