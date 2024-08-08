import axios from "axios";

//Request urls
const getProfessionsUrl = 'http://localhost:5000/api/profession';



// Fetch data functions.
const getProfessions = async () => {
    try {
        const response = await axios.get(getProfessionsUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Data fetched Successfuly:', response.data);
        return response.data;
    } catch (error) {
        // alert('Data fetched failed. Please try again.');
         console.error('Error during Data fetched:', error.response.data);
    }
}

const data = await getProfessions();
const getProfessionsString = data.map(op => ({
    value: op._id,
    label: op.profession
}));

console.log(getProfessionsString);


//exports
export { getProfessions ,getProfessionsString}