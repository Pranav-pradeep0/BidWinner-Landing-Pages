import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

const data = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'

    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'

    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'

    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'

    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectur. Sem nec magnis cursus lectus quisque',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
        imageUrl: 'https://i.postimg.cc/G3TQ2CvW/Rectangle-179.png',
        date:'September 14, 2016'

    }
];


const PopularInsights = () => {

    const initialDisplayLength = 80;
    const [displayLength, setDisplayLength] = useState({});

    const handleReadMore = (id) => {
        setDisplayLength((prevDisplayLength) => ({
            ...prevDisplayLength,
            [id]: prevDisplayLength[id] === initialDisplayLength ? 'full' : initialDisplayLength,
        }));
    };

    return (
        <Fragment>
            <Box sx={{ marginBlock: '40px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap:'20px' }}>
                {data.map((item) => (
                    <Card key={item.id} sx={{ maxWidth: 400, boxShadow: 'none', }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="320"
                                sx={{ width: '400px', }}
                                image={item.imageUrl}
                                alt={item.title}
                            />
                            <CardContent sx={{ padding: '0', }}>
                                <CardHeader
                                    sx={{paddingLeft:'0', paddingBottom:'12px',}}
                                    title={<Typography sx={{fontWeight:'600', fontSize:'20px'}}>{item.title}</Typography>}
                                    subheader={<Typography sx={{fontSize:'12px', fontWeight:'300px', paddingTop:'10px'}}>{item.date}</Typography>}
                                />
                                <Divider sx={{marginBottom:'12px'}}></Divider>
                                <Typography variant="body2" color="text.secondary" >
                                    {displayLength[item.id] === 'full' ? (
                                        <>
                                            {item.description}
                                            <Button onClick={() => handleReadMore(item.id)} sx={{ color: 'black' }}>
                                                Read Less
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            {item.description.slice(0, initialDisplayLength)}{' '}
                                            {item.description.length > initialDisplayLength && (
                                                <Button onClick={() => handleReadMore(item.id)} sx={{ color: 'black' }}>
                                                    Read More
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Fragment>
    )
}

export default PopularInsights