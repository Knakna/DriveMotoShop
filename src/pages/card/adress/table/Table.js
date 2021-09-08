import React from 'react';


import s from './Table.module.scss';

import Th from './th/Th';
import Td from './td/Td';
import Btn from '../../btn/Btn';



function Table() {
  return (

    <table className={s.table}>

      <tr>
        <th> <Th text="Адрес"/> </th>
        <th colspan="2"> <Th text="Режим работы"/> </th>
        <th> <Th text="Доступно"/> </th>
        <th> <Th text="Количество"/> </th>
        <th> <Th text=""/> </th>
      </tr>


      <tr className={s.tr}>
        <td> <Td text="Москва, ул. Науки 25"/> </td>
        <td> <Td text="пн-сб:  вс:"/> </td>
        <td> <Td text="08:00-19:00 09:00-17:00"/> </td>
        <td> <Td text="В наличии"/> </td>
        <td> <Td text="1"/> </td>
        <td> <Btn/> </td>

      </tr>

      <tr className={s.tr}>
        <td> <Td text="Москва, ул. Науки 25"/> </td>
        <td> <Td text="пн-сб:вс:"/> </td>
        <td> <Td text="08:00-19:00 09:00-17:00"/> </td>
        <td> <Td text="В наличии"/> </td>
        <td> <Td text="1"/> </td>
        <td> <Btn/> </td>

      </tr>

      <tr className={s.tr}>
        <td> <Td text="Москва, ул. Науки 25"/> </td>
        <td> <Td text="пн-сб:вс:"/> </td>
        <td> <Td text="08:00-19:00 09:00-17:00"/> </td>
        <td> <Td text="В наличии"/> </td>
        <td> <Td text="1"/> </td>
        <td> <Btn/> </td>

      </tr>

      <tr className={s.tr}>
        <td> <Td text="Москва, ул. Науки 25"/> </td>
        <td> <Td text="пн-сб:вс:"/> </td>
        <td> <Td text="08:00-19:00 09:00-17:00"/> </td>
        <td> <Td text="В наличии"/> </td>
        <td> <Td text="1"/> </td>
        <td> <Btn/> </td>

      </tr>




    </table>
  );
}

export default Table;
