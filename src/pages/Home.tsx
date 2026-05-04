import PhotoCard from "../components/PhotoCard";

function Home(){
    return (
        <>
            
            <div className="container">
                <h1 className="m-3">Travel Photography: What I wanted to do when I was younger</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <PhotoCard img="https://i.natgeofe.com/n/e2f26e6b-8255-4391-84be-4b0919d4c0d8/20240626-0349-Jonathan%20Irish-NGCW-CITI-AA-Amsterdam-_7R52855.jpg"
            title="Amsterdam, The Netherlands" body="2018 Trip to Amsterdam" />
                    </div>
                    <div className="col-sm-4">
                        <PhotoCard img="https://cdn.kimkim.com/files/a/images/043f4be4409092a321819b32102db907ea148c46/original-84aa59a6591bc04fbef3d6dd4542d343.jpg"
            title="Brussels, Belgium" body="2023 Trip to Belgium" />
                    </div>
                    <div className="col-sm-4">
                        <PhotoCard img="https://eliunrealestate.com/wp-content/uploads/2025/10/republica-dominicana.jpg"
            title="Punta Cana, Dominican Republic" body="2026 Trip to Dominican Republic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;