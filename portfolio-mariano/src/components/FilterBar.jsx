import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';


//MUI COMPONENTS
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function FilterBar() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const technique = searchParams.get('technique');

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(data);
    //Art filter
    const techniqueAll = [];
    
    data && data.map(art => 
        art.technique
        
    )
    console.log(data.technique);

    function handlerSubmit(e) {
        e.target.value ? e.target.name === 'technique' ? 
        setSearchParams(searchParams.set( e.target.name, `${e.target.value[0]}/${e.target.value[1]}`)) :
        setSearchParams(searchParams.set( e.target.name, e.target.value )) :
        searchParams.delete(e.target.name);
        location.search = `?${searchParams.toString()}`;
        navigate(location);
    }
    return (
        <div className="py-4 px-3 flex md:flex-row flex-col z-1">
            {
            <>
                <FormControl>
                    <InputLabel id="technique">Technique</InputLabel>
                    <Select
                        sx={{ width: 150, mr: "2rem" }}
                        id="technique"
                        name="technique"
                        variant="filled"
                        value={technique ? technique : ""}
                        fullWidth
                        size='small'
                        onChange={(e) => handlerSubmit(e)}
                    >
                    {
                        techniqueAll?.map((tech, i) => {
                            return (
                                <MenuItem 
                                    key={i} 
                                    value={tech}
                                >
                                {tech} </MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </>
            }
        </div>
    )
}
