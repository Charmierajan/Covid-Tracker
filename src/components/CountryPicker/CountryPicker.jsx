import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries,setFetchedCountries]= useState([])
  useEffect(()=>{
    const fetchAPI=async()=>{
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries]); {/*It will change only what setfetchedcountries will change. will enable us to pick different countries*/}
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}> {/*e stands for events, e.target.value-> stands for data of counry chosen*/}
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)} {/*an option for each country*/}
        </NativeSelect> {/*key is a react rule */}
      </FormControl>
    )
}

export default CountryPicker;