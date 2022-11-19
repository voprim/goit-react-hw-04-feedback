import propTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  titte: propTypes.string,
  children: propTypes.node.isRequired,
};
