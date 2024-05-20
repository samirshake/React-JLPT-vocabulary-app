

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material'
;
import { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { fontSize } from '@mui/system';

const ListCard = () => {
  const { data, loading, error } = useStoreState(state => state.words);
  const [show,setShow] = useState(false)
  const [count,setCount] = useState(0)
console.log(data);
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error.message}</p>;
    const handleClick = ()=>{
    show? setShow(false): setShow(true)
    }
  return (
    data.length ? <Stack direction="row" justifyContent={'center'} alignItems={'center'}
    sx={{height:"75vh",padding: 2}}>
       <Paper elevation={3}sx={{m: 1,width: "20rem",height:"inherit",padding: 2,overflow: "scroll"}}>
       
       {data.map((word, index) => (
           
         <Paper key={index} elevation={2} sx={{marginBottom: 1,padding: 1}}>
          {word.word} - {word.meaning}
         </Paper>
       ))}
     </Paper>
     <Box>
     <Button onClick={handleClick}>
     {show? <Paper  elevation={2} sx={{margin: 1,padding: 1,width: "20rem",height:"25rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"8rem",cursor:"pointer"}}>
          { data[count]?.word}
       </Paper> : <Paper  elevation={2} sx={{margin: 1,padding: 1,width: "20rem",height:"25rem",display:"flex",flexDirection:"column",gap: 1,justifyContent:"space-between",fontSize:"2rem",cursor:"pointer"}}>
          <Paper>
          {data[count]?.word }
          </Paper>
          <Paper>
          {data[count]?.meaning }
          </Paper>
          <Paper>
          {data[count]?.furigana }
          </Paper>
          <Paper>
          {data[count]?.romaji }
          </Paper>
       </Paper>}
     </Button>
     <Stack flexDirection={'row'} justifyContent={'center'} gap={2}>
       <Button variant="contained" size="large" onClick={()=>{
           if(count>=data.length-1){setCount(0)}

           else setCount(count+1)
       }}>Next</Button>
       <Button  variant="contained" size="large" onClick={()=>{
           if(count<=0){setCount(data.length-1)}
           else setCount(count-1)
       }}>Prev</Button>
     </Stack>
     </Box>
   </Stack> : <p style={{fontSize: "10rem"}}>
   Select Level Please
   </p>
  );
};

export default ListCard;
