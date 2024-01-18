import SearchIcon from '@mui/icons-material/Search';
import Card from '../card/card';
import { useEffect, useState } from 'react';



export default function Search({ prop }) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/${prop}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setFilterData(data.results))
            .catch(err => console.log(err));
    }, [prop]);

    const handleFilter = (value) => {
        if (value === "") {
            setData(filterData);
        }
        else {

            const res = filterData.filter(movie =>
                movie.original_title.toLowerCase().includes(value.toLowerCase())
            );
            setData(res);
        }

    };

    return (
        <>
            <div className='flex justify-center'>
                <div className="p-2 border-2 border-nav rounded-full dark:border-white mt-10 w-[50%] flex gap-3">
                    <SearchIcon className="dark:text-white" />
                    <input
                        placeholder='Type here to search...'
                        className='bg-transparent outline-none caret-black dark:caret-white'
                        onChange={e => handleFilter(e.target.value)}
                    />
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 md:ml-12 md:mr-12 gap-3 mr-2 ml-2'>
                {data.map(movie => (
                    <div className='flex justify-center'>
                        <Card key={movie.id} movie={movie} /></div>
                ))}


                

            </div>


        </>
    );
}
