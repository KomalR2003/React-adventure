const img1 = "https://cdn.pixabay.com/photo/2018/10/11/08/01/mountain-3739108_1280.jpg"
const img2 = "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg";
const img3 = "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg";
const img4 = "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_1280.jpg";
const img5 = "https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg";
const img6 = "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg";
const img7 = "https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg";
const img8 = "https://cdn.pixabay.com/photo/2017/08/06/18/29/woman-2594934_1280.jpg";


function Home(){
    return(
        <>
        <div className="home">
            <div className="home-content">
            <h1>Explore world</h1>
            <h3>With Us</h3>
            <div className="btns">
            <button className="btn1">Know More</button>
            <button className="btn2">Visit Site</button>
            </div>
            </div>
        </div>
        
        {/* about  */}
        <div className="home-abt">
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
            </div>

            
            {/* events  */}

            <div className="home-abt">
            <h1 className="head">Events</h1>
            <div className="event">
                <div className="event1">
                    <img src="https://cdn.pixabay.com/photo/2018/04/22/18/19/caravan-3341872_1280.jpg" alt="rajasthan" />

                    <div className="event-content">
                        <h2>Jaisalmer <br />Tracking Camp </h2>
                        <p>4 days & 3 night</p>
                        <p>&#8377; 4999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://cdn.pixabay.com/photo/2018/08/27/14/34/shaniwar-wada-3635113_1280.jpg" alt="maharastra" />

                    <div className="event-content">
                        <h2>Maharastra <br />Tracking Camp </h2>
                        <p>4 days & 3 night</p>
                        <p>&#8377; 3999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://travelothon.com/wp-content/uploads/2021/06/Don-Hill-Station.png" alt="saputara" />

                    <div className="event-content">
                        <h2>Saputara <br />Adventure Camp </h2>
                        <p>3 days & 2 night</p>
                        <p>&#8377; 2999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://cdn.pixabay.com/photo/2020/02/06/17/07/snow-4824899_1280.jpg" alt="manali" />

                    <div className="event-content">
                        <h2>Manali <br /> Snow Tracking Camp </h2>
                        <p>10 days & 9 night</p>
                        <p>&#8377; 11999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://www.youthhostelahmedabad.org/wp-content/uploads/2022/01/Bhrigu-Lake.jpg" alt="Bhrigu lake " />

                    <div className="event-content">
                        <h2>Bhrigu Lake <br />Track </h2>
                        <p>11 days & 10 night</p>
                        <p>&#8377; 13999 / Person</p>
                    </div>
                </div>
            </div>


            <div className="event2">
                <div className="event1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC1Y3OgTMk0fJrpOsJUMS62nJjL2NGJWIqJ5ZmfPn5rbdAKaisnKUHHHjtfLJ4khQfrg&usqp=CAU" alt="Kedarnath" />

                    <div className="event-content">
                        <h2>Kedarnath <br />Tracking Camp </h2>
                        <p>12 days & 11 night</p>
                        <p>&#8377; 14999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://www.shrineyatra.com/wp-content/uploads/2019/08/Chopta-Tungnath-Chandrashila-Trek.jpg" alt="Tungnath" />

                    <div className="event-content">
                        <h2>Tungnath Chopta <br />Tracking Camp </h2>
                        <p>11 days & 10 night</p>
                        <p>&#8377; 10999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://trekthehimalayas.com/wp-content/uploads/2023/04/VOF.jpg" alt="Valley Of Flowers" />

                    <div className="event-content">
                        <h2>Valley of Flowers <br />Adventure Camp </h2>
                        <p>10 days & 9 night</p>
                        <p>&#8377; 9999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbzqPnJY5n46WmnzQY17ry2ZbLNFN39RaLg&usqp=CAU" alt="Patalsu" />

                    <div className="event-content">
                        <h2>Patalsu Peak<br /> Snow Tracking Camp </h2>
                        <p>15 days & 14 night</p>
                        <p>&#8377; 15999 / Person</p>
                    </div>
                </div>
                <div className="event1">
                    <img src="https://www.holidify.com/images/cmsuploads/compressed/4350_20190906104805.jpg" alt="Bet Dwarka " />

                    <div className="event-content">
                        <h2>Bet Dwarka <br />Adventure camp </h2>
                        <p>3 days & 2 night</p>
                        <p>&#8377; 2999 / Person</p>
                    </div>
                </div>
            </div>
            </div>

            {/* contact  */}

            <div className="home-abt">
                <h1 className="head">Contact Us</h1>
            <form className="form">
                <div className="form-item">
                    <div className="items">
                        
                        <label for="name">Name:</label>
                        <br />
                        <input type="text" placeholder="Enter your name" className="nm" id="name"></input>
                        <br/>
                        <br/>
                        <label for="email">Email:</label>
                        <br />
                        <input type="email" placeholder="Enter your email" className="nm" id="email"></input>
                        <br/>
                        <br/>
                        <label for="contact">Mobile No:</label>
                        <br />
                        <input type="tel" placeholder="Enter your Mobile number" className="nm" id="contact" maxLength={10}></input>
                        <label for="msg">Message:</label>
                        <br />
                        <input type="textarea" placeholder="Enter your Message" className="nm" id="msg"  ></input>
                        <br/>
                        <br/>

                        <button className="sub">Send</button>
                    </div>
                </div>
               
            </form>
            </div>


            {/* gallery  */}

            <div className="home-abt">
                <h1 className="head">Gallery</h1>
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
                </div>
        </>
    );
}
export default Home;