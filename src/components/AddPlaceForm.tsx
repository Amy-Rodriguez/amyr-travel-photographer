import { useState } from 'react';

type Location = { city: string, country: string };

function AddPlaceForm() {
    const [addNew, setAddNew]=useState<Location>({city:'',country:''})
    const [locations, setLocations] = useState<Location[]>([]);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!addNew.city || !addNew.country) return;
        const newLocation: Location = { city:addNew.city, country:addNew.country }
        setLocations([...locations, newLocation]);
        clearForm();
    }

    const clearForm = () => {
        setAddNew({city:'',country:''})
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form id="userForm" onSubmit={handleSubmit}>
                            <div className="mb-3 bg-light">
                                <label htmlFor="city" className="m-3">
                                    City
                                </label>
                                <input id="city" name="city" type="text" required onChange={(e) => setAddNew({city:e.target.value,country:addNew.country})} value={addNew.city} />

                                <label htmlFor="country" className="m-3">
                                    Country
                                </label>
                                <input id="country" name="country" type="text" required onChange={(e) => setAddNew({city:addNew.city,country:e.target.value})} value={addNew.country} />

                                <button className="btn btn-success m-3" form='userForm' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <table id="tblLocations" className="table table-striped text-start">
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locations.map((location,index)=>(
                                    <tr key={index}>
                                        <td>{location.city}</td>
                                        <td>{location.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPlaceForm;