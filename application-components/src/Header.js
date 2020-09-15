import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const Header = props => {
  const { items } = props;

  return (
    <Styled.Header>
      <Styled.Wrapper>
        {items.map(item => (
          <Styled.Item href={item.link} key={item.label}>{item.label}</Styled.Item>
        ))}
      </Styled.Wrapper>
    </Styled.Header>
  );
};

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
    external: PropTypes.bool,
  })),
};

Header.defaultProps = {
  items: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Complexes',
      link: '/complexes',
    },
    {
      label: 'Flats',
      link: '/flats',
    },
  ],
};

export default Header;
