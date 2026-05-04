import PhotoCard from "../components/PhotoCard";

function Equipment(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <PhotoCard img="https://www.bhphotovideo.com/images/fb/canon_2727c002_eos_rebel_t7_dslr_1461734.jpg"
            title="Canon EOS Rebel T7 DSLR" body="I got this camera as a gift for myself a few years ago at Target. I didn't really know anything about cameras, but it was recommended as a good beginner camera, and it has been east to use. It did come in a kit with the lens, so it was a good deal." />
                    </div>
                    <div className="col-sm-4">
                        <PhotoCard img="https://i5.walmartimages.com/asr/51e5fc2b-fe28-4efa-a6b9-df4eddd1d690_1.a22d7c69e2cde85a472e2a8d67446a56.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            title="Lenses for the Canon EOS Rebel T7" body="The 18-55mm lens came in the kit with the camera an is great for most photography needs, especially travel photography. I get the telephoto lens as a gift a few years later for taking landscape and wildlife photos." />
                    </div>
                    <div className="col-sm-4">
                        <PhotoCard img="https://i5.walmartimages.com/asr/0eeab619-5df1-475f-a234-bce987908007.e241f8c82bcb219db84299c661756e64.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            title="Onn Tripod" body="I got this tripod as a gift and it works great! It has been very useful when talking self-portraits in beautiful places." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Equipment;