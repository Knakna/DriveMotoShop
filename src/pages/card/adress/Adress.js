import React from 'react';

import Form from './form/Form';
import Table from './table/Table';

import s from './Adress.module.scss';


function Adress() {
  return (

    <div className={s.adress}>
      <Form/>
      <Table/>
    </div>

  );
}

export default Adress;
