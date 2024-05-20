
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';


export default function SelectLevel() {
  const [level, setLevel] = useState('');
  const fetchWordsByLevel = useStoreActions(actions => actions.words.fetchWordsByLevel);

  const handleChange = (event) => {
    const level = event.target.value;
    setLevel(level);

    if (level) {
      fetchWordsByLevel(level);
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">JLPT level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={level}
        label="jlpt Level"
        onChange={handleChange}
      >
        <MenuItem value={1}>N1</MenuItem>
        <MenuItem value={2}>N2</MenuItem>
        <MenuItem value={3}>N3</MenuItem>
        <MenuItem value={4}>N4</MenuItem>
        <MenuItem value={5}>N5</MenuItem>

      </Select>
    </FormControl>
  );
}
