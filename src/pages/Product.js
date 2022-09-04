import React from 'react';
import Pantry from '../components/Products/Pantry';
import ProductDisplay from '../components/ProductDisplay';
import { useParams } from 'react-router-dom';
import Trolley from '../components/Products/trolleys';
import Ppe from '../components/Products/PPE';
import HotEquip from '../components/Products/HotEquip';
import SSelectricals from '../components/Products/sselectricals';
import Coldequip from '../components/Products/ColdEquip';
import WashEquip from '../components/Products/WashEquip';
import Exhaust from '../components/Products/Exhaust';
import Display from '../components/Products/Display';

const Product = () => {
  let { product } = useParams();
  return (
    <div>
      <ProductDisplay />
      {
        {
          Pantry: <Pantry />,
          Trolley: <Trolley />,
          Ppe: <Ppe />,
          HotEquips: <HotEquip />,
          Signatureequips: <SSelectricals />,
          ColdEquips: <Coldequip />,
          WashEquips: <WashEquip />,
          Exhaust: <Exhaust />,
          Display: <Display />,
          AutomaticSteamBoiler: <SSelectricals />,
          undefined: <Coldequip />,
        }[product]
      }
    </div>
  );
};

export default Product;
