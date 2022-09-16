import React from 'react';
import { NotFoundBlock } from '../components';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <NotFoundBlock />
      <div className="button button--outline button--add">
        <Link to="/">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
