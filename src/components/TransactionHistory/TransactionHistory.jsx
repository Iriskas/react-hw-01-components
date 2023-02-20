import PropTypes from 'prop-types';
import {
  TransactionTable,
  Thead,
  TdTransaction,
  Tbody,
  CaptionTransaction,
  Tr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction>Amount</CaptionTransaction>
          <CaptionTransaction>Currency</CaptionTransaction>
        </tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }, i) => (
          <Tr
            key={id}
            // style={{
            //   backgroundColor: `${i % 2 === 0 ? 'white' : '#c7c6c6'}`,
            // }}
          >
            <TdTransaction>{capitalizeFirstLetter(type)}</TdTransaction>
            <TdTransaction>{amount}</TdTransaction>
            <TdTransaction>{currency}</TdTransaction>
          </Tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
