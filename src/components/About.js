const img1 = "https://cdn.pixabay.com/photo/2018/10/11/08/01/mountain-3739108_1280.jpg";
const img2 = "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg";
const img3 = "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg";
const img4 = "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_1280.jpg";

function About() {
    return (
        <>
            <div className="abt">
                <div className="abtimg">
                <div className="abtimg1">
                    <img className="img1" src={img1} alt="demo" />
                    <img className="img2" src={img2} alt="demo2"/>
                </div>
                <div className="abtimg2">
                    <img className="img3" src={img3} alt="demo" />
                    <img className="img4" src={img4} alt="demo2"/>
                </div>
                </div>
                <div className="abtcontent">
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </div>

            </div>
        </>
    );
}
export default About;