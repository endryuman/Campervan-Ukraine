import css from './Sidebar.module.css'
import sprite from '../../images/sprite.svg'
import { equipList } from 'utils/equipList'
import { vehicleType } from 'utils/vehicleType'
import Select from 'react-select';
import { useState } from 'react';

const options = [
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'lviv', label: 'Lviv' },
    { value: 'odessa', label: 'Odessa' },
    { value: 'kharkiv', label: 'Kharkiv' },
  ];

export const Sidebar =() =>{
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className={css.sidebar}>
        <div className={css.locationWrap}>
            <p className={css.subtitle}>Location</p>
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            theme={(theme) => ({
                ...theme,
                borderRadius: 8,
                colors: {
                  ...theme.colors,
                  neutral10: 'white',
                  primary25: '#d04c42',
                  primary: '#d04c42',
                  neutral20: "black",
                  neutral95: "blue"
                },
              })}
      />
        </div>
        <div>
            <p className={css.subtitle}>Filters</p>
            <form action="">
            <fieldset className={css.form}>
                <legend className={css.formTitle}>Vehicle equipment</legend>
                    <div className={css.equipWrap}>
                            {equipList.map(eqp => {
                                return (
                                <label key={eqp.value} className={css.container}>
                                    <input
                                        type="checkbox"
                                        name="equip" 
                                        value={eqp.value}
                                    />
                                    <div className={css.checkmark}>
                                        <svg className={css.svg}>
                                            <use href={`${sprite}#icon-${eqp.value}`}/>
                                        </svg>
                                        <span className={css.name}>{eqp.name}</span>
                                        
                                    </div>
                                </label>
                                )
                            })}
                    </div>
            </fieldset>
            <fieldset className={css.form}>
                <legend className={css.formTitle}>Vehicle type</legend>
                    <div className={css.equipWrap}>
                            {vehicleType.map(vhc => {
                                return (
                                <label key={vhc.value} className={css.container}>
                                    <input
                                        type="radio"
                                        name="equip" 
                                        value={vhc.value}
                                    />
                                    <div className={css.checkmark2}>
                                        <svg className={css.svg}>
                                            <use href={`${sprite}#icon-${vhc.value}`}/>
                                        </svg>
                                        <span className={css.name}>{vhc.name}</span>
                                        
                                    </div>
                                </label>
                                )
                            })}
                    </div>
            </fieldset>
            <button type='submit' className={css.button}>SEARCH</button>
            </form>
        </div>
    </div>
  )
}
