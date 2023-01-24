const Image = ({ src, alt="", styles="" }) => {
    return (
        <img src={src} alt={alt} className={styles}/>
    );
};

export default Image;
