import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import horseMan from '../../assets/horse_man.png';
import MapRD from '../../assets/map.png';

import api from '../../services/api';

import { colors } from '../../theme/colors';

import Select from 'react-select';
import { Button } from '../../components/Button';
import { List } from '../../components/List';

import { SelectSection, PathSection, MapSection, SearchSection, Footer } from './styles';

const customStyles = {
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none'
  },
};

const Home = () => {

  const [cities, setCities] = useState([]);
  const [startCity, setStartCity] = useState('');
  const [endCity, setEndCity] = useState('');
  const [path, setPath] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = async () => {
      setIsOpen(false);
  }

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

  const findPath = async () => {
    if(startCity === '' || endCity === ''){
      return;
    }

    const { data } = await api.post('/path', {
        start: startCity,
        end: endCity
    });
    
    setPath(data);
    setIsOpen(true);

    return data;
  }

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected && colors.red,
      color: state.isSelected ? colors.white : colors.black,
      padding: 15,
    })
  }

  return (
      <>
        <SearchSection>
        <SelectSection>
            <Select
            options={cities}
            placeholder='Escolha uma cidade inicial...'
            styles={selectStyles}
            onChange={(e)=>{
                setStartCity(e.value);
            }}
            />
            <Select
            options={cities}
            placeholder='Escolha uma cidade de destino...'
            styles={selectStyles}
            onChange={(e)=>{
                setEndCity(e.value);
            }}
            />
            <Button text='Localizar' onClick={findPath} />
        </SelectSection>
        <MapSection src={MapRD} width="850px" />
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles}>
            <PathSection>
            {path && (
                <List items={path} title='Melhor Rota' imageSrc={horseMan} />
                )}
            </PathSection>
            <Button text='Fechar' onClick={handleCloseModal} />
        </Modal>
        <Footer>
            <p>
            powered by <strong>Vinicius Saturnino</strong> e <strong>Mateus Gomes</strong>
            </p>
        </Footer>
        </SearchSection>
      </>
  )
};

export { Home };