import Card from "../card/card";

export default function SearchMovie({data}){

    
    return (
        <>
        {data.map(movie => (
            <div className='flex justify-center'>
                <Card key={movie.id} movie={movie} /></div>
        ))}
        </>
    )
}