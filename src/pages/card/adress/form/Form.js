import React from 'react';

import { StyledRadio } from './checkbox/Checkbox'

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import s from './Form.module.scss';


function Form() {
  return (

    <form className={s.form}>
      <div className={s.shop}>
        <label className={s.label} for="input">Магазин</label>
        <input className={s.input} id="input" type="text" />
      </div>

        <FormControl component="fieldset"  >
          <RadioGroup defaultValue="Забрать в течение недели"  name="customized-radios"
          style={{flexDirection: "row"}}>
            <FormControlLabel style={{marginRight: "55px"}}value="Забрать сегодня" control={<StyledRadio />} label="Забрать сегодня" />
            <FormControlLabel value="Забрать в течение недели" control={<StyledRadio />} label="Забрать в течение недели" />
          </RadioGroup>
        </FormControl>

    </form>
  );
}

export default Form;
