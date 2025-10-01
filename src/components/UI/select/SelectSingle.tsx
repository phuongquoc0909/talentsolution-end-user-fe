'use client';
import { useCallback, useMemo } from 'react';
import Select from 'react-select';
import {
  SingleValue,
  StylesConfig,
} from 'react-select';

export interface Option {
  value: string;
  label: string;
}

export interface GroupedOption {
  label: string;
  options: Option[];
}

interface Props {
  name: string;
  placeholder?: string;
  options: Option[] | GroupedOption[];
  value?: string;
  onChange: (value: string) => void;
  isGrouped?: boolean;
  noOptionsMessage?: string;
}

// Constants for better maintainability
const STYLES = {
  CONTROL_HEIGHT: 50,
  FONT_SIZE: 18,
  OPTION_FONT_SIZE: 16,
  SEARCH_HEIGHT: 30,
  Z_INDEX: 9999,
  COLORS: {
    PRIMARY: '#63a70a',
    WHITE: '#fff',
    TEXT: '#333',
    BORDER: '#ced4da',
    BORDER_HOVER: '#aaa',
  },
} as const;

// Memoized styles to prevent recreation on every render
const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #fff',
    borderRadius: 0,
    borderColor: state.isFocused ? '#fff' : STYLES.COLORS.BORDER,
    '&:hover': { borderColor: '#fff' },
    height: STYLES.CONTROL_HEIGHT,
    fontSize: STYLES.FONT_SIZE,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative',
  }),
  input: (provided) => ({
    ...provided,
    color: STYLES.COLORS.WHITE,
    fontSize: STYLES.FONT_SIZE,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: STYLES.COLORS.WHITE,
    fontSize: STYLES.FONT_SIZE,
    lineHeight: 'normal',
    margin: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: STYLES.COLORS.WHITE,
    fontSize: STYLES.FONT_SIZE,
    lineHeight: 'normal',
    margin: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? STYLES.COLORS.PRIMARY : 'transparent',
    color: state.isSelected ? STYLES.COLORS.WHITE : STYLES.COLORS.TEXT,
    fontSize: STYLES.OPTION_FONT_SIZE,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: STYLES.COLORS.PRIMARY,
      color: STYLES.COLORS.WHITE,
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 15px',
    margin: 0,
    height: 45,
  }),
  menu: (provided) => ({
    ...provided,
    margin: 0,
    borderRadius: 0,
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 99999,
    width: '100%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    backgroundColor: STYLES.COLORS.WHITE,
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 99999,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    margin: 5,
    maxHeight: '200px',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

// Memoized noOptionsMessage function
const getNoOptionsMessage = (message: string) => () => message;

const SelectSingle = ({
  name,
  options = [],
  placeholder = '',
  value = '',
  onChange,
  isGrouped = false,
  noOptionsMessage = 'No options found',
}: Props) => {
    const handleChange = useCallback(
      (selectedOption: SingleValue<Option>) => {
        const value = selectedOption?.value || '';
        console.log(`SelectSingle [${name}] changed:`, {
          selectedOption,
          value,
          label: selectedOption?.label
        });
        onChange(value);
      },
      [onChange, name],
    );

    // Find the selected option based on value
    const selectedOption = useMemo(() => {
      if (!value) return null;
      
      if (isGrouped) {
        const groupedOptions = options as GroupedOption[];
        for (const group of groupedOptions) {
          const found = group.options.find(option => option.value === value);
          if (found) return found;
        }
      } else {
        const flatOptions = options as Option[];
        return flatOptions.find(option => option.value === value) || null;
      }
      return null;
    }, [value, options, isGrouped]);

    return (
        <Select<Option, false >
          name={name}
          placeholder={placeholder}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          options={options}
          instanceId={name}
          classNamePrefix="react-select"
          isSearchable={true}
          isClearable={false}
          noOptionsMessage={getNoOptionsMessage(noOptionsMessage)}
          filterOption={(option, inputValue) => {
            if (!inputValue) return true;
            return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
          }}
        />
    );
};

SelectSingle.displayName = 'SelectSingle';

export default SelectSingle;