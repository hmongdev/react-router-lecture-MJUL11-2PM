import { useParams } from 'react-router-dom';

export default function AnimalDetail() {
    // the useParams hook will give us all of the url params
    // from the path (like /animals/:id) as an object. Use
    // object destructing to save the :id portion to a variable
    // with the name 'id'
    // if it were `:taco` in the route, then it would be `const {taco}`
    const { id } = useParams();
    return (
        <>
            <h1>Animal Details</h1>
            <p>Animal id of {id}</p>
        </>
    );
}
