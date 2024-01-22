import './index.css';

import { MdOutlineErrorOutline } from "react-icons/md";
import PropTypes from 'prop-types';

const ErrorTicket = ({isError, textError}) => {
  return (
    <>
      <p className={`error ${isError ? '' : 'inactive'}`} >
        <MdOutlineErrorOutline />Hay un error: {textError}
      </p>
    </>
  );
};

ErrorTicket.propTypes = {
  isError: PropTypes.bool.isRequired,
  textError: PropTypes.string.isRequired,
}

export default ErrorTicket;
