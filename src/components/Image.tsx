function Image({ src, alt }: {src:string, alt:string}){
    return (    
        <img 
        src={src}
        alt={alt}
        width='100%'
        height='100%'
        />
    );
}

export default Image;