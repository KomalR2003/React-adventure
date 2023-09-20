const img1 = "https://cdn.pixabay.com/photo/2018/10/11/08/01/mountain-3739108_1280.jpg"
const img2 = "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg";
const img3 = "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg";
const img4 = "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_1280.jpg";

const img5 = "https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg";
const img6 = "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg";
const img7 = "https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg";
const img8 = "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_1280.jpg";

function Gallery(){
    return(
        <>
        <div className="gallery">
                <div className="galimg1">
                    <img className="img1" src={img1} alt="demo" />
                    <img className="img2" src={img2} alt="demo2"/>
                    <img className="img3" src={img3} alt="demo" />
                    <img className="img4" src={img4} alt="demo2"/>
                </div>
                <div className="galimg2">
                <img className="img1" src={img5} alt="demo" />
                    <img className="img2" src={img6} alt="demo2"/>
                    <img className="img3" src={img7} alt="demo" />
                    <img className="img4" src={img8} alt="demo2"/>
                </div>
                </div>
        </>
    );
}
export default Gallery;