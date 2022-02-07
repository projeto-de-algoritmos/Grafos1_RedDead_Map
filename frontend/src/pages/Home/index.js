import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { colors } from '../../theme/colors';

import Select from 'react-select';
import { Button } from '../../components/Button';

import { SelectSection } from './styles';

const Home = () => {

  const [cities, setCities] = useState([]);

  //load cities from api
  useEffect(()=> {
    const loadCities = async () => {
      const { data } = await api.get('/cities');

      const options = [];

      data.forEach((e)=>{
        options.push(
          {
            value: e,
            label: e
          }
        );

        return options;
      })
      
      setCities(options);
    }

    loadCities();
  }, [])

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected && colors.red,
      color: state.isSelected ? colors.white : colors.black,
      padding: 15,
    })
  }

  return (
    <div>
      <SelectSection>
        <Select 
          options={cities}
          placeholder='Escolha uma cidade inicial...'
          styles={selectStyles}
        />
        <Select 
          options={cities}
          placeholder='Escolha uma cidade de destino...'
          styles={selectStyles}
        />
        <Button text='Localizar' />
      </SelectSection>
    </div>
  )
};

export { Home };