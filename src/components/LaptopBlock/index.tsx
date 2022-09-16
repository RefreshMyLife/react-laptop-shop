import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFindCatyItemById } from '../../redux/cart/selector';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

type LaptopProps = {
  id: string;
  name: string;
  price: string;
  imageurl: string;
  screendiagonal: any;
  operationalmemory: any;
  screentechnology: any;
  diskconfiguration: any;
  casematerial: any;
};

const defaultProps: LaptopProps = {
  id: '',
  name: '',
  price: '',
  imageurl: '',
  screendiagonal: [0],
  operationalmemory: [0],
  screentechnology: [''],
  diskconfiguration: [''],
  casematerial: [0],
};
export const LaptopBlock: React.FC<LaptopProps> = ({
  //посмотреть мб как пофиксить camelCase
  id,
  name,
  price,
  imageurl,
  screendiagonal,
  operationalmemory,
  screentechnology,
  diskconfiguration,
  casematerial,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectFindCatyItemById(id));
  const [activeScreenDiagonal, setActiveScreenDiagonal] = useState(0);
  const [activeOperationalMemory, setActiveOperationalMemory] = useState(0);
  const [activeScreenTechnology, setActiveScreenTechnology] = useState(0);
  const [activeDiskConfiguration, setActiveDiskConfiguration] = useState(0);
  const [activeCaseMaterial, setActiveCaseMaterial] = useState(0);
  const addedCount = cartItem ? cartItem.count : 0;
  const typeOfMaterial = ['металл', 'пластик'];

  const onClickAddLaptop = () => {
    dispatch(
      addItem({
        id,
        name,
        price: Number(price),
        imageurl,
        screendiagonal,
        operationalmemory,
        screentechnology,
        diskconfiguration,
        casematerial,
      } as CartItem),
    );
  };

  price =
    casematerial.price[activeCaseMaterial] +
    screendiagonal.price[activeScreenDiagonal] +
    operationalmemory.price[activeOperationalMemory] +
    screentechnology.price[activeScreenTechnology] +
    diskconfiguration.price[activeDiskConfiguration];
  return (
    <div className="laptop-block__wrapper">
      <div className="laptop-block">
        <Link to={`/laptop/${id}`}>
          <img className="laptop-block__image" src={imageurl} alt="Laptop" />
          <h4 className="laptop-block__title">{name}</h4>
        </Link>
        <div className="laptop-block__selector">
          <ul>
            {screendiagonal.value.map((screen: number, i: number) => (
              <li
                key={i}
                onClick={() => setActiveScreenDiagonal(i)}
                className={activeScreenDiagonal === i ? 'active' : ''}>
                {screen} "
              </li>
            ))}
          </ul>
          <ul>
            {operationalmemory.value.map((memory: number, i: number) => (
              <li
                key={i}
                onClick={() => setActiveOperationalMemory(i)}
                className={activeOperationalMemory === i ? 'active' : ''}>
                {memory} ГБ
              </li>
            ))}
          </ul>
          <ul>
            {screentechnology.value.map((technology: string, i: number) => (
              <li
                key={i}
                onClick={() => setActiveScreenTechnology(i)}
                className={activeScreenTechnology === i ? 'active' : ''}>
                {technology}
              </li>
            ))}
          </ul>
          <ul>
            {diskconfiguration.value.map((disk: string, i: number) => (
              <li
                key={i}
                onClick={() => setActiveDiskConfiguration(i)}
                className={activeDiskConfiguration === i ? 'active' : ''}>
                {disk}
              </li>
            ))}
          </ul>
          <ul>
            {casematerial.value.map((materialId: number) => (
              <li
                key={materialId}
                onClick={() => setActiveCaseMaterial(materialId)}
                className={activeCaseMaterial === materialId ? 'active' : ''}>
                {typeOfMaterial[materialId]}
              </li>
            ))}
          </ul>
        </div>
        <div className="laptop-block__bottom">
          <div className="laptop-block__price">от {price} $</div>
          <div onClick={onClickAddLaptop} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>

            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};
LaptopBlock.defaultProps = defaultProps;
