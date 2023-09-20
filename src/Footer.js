function Footer(){
    return(
        <>
                <div className="footer">
                    <div className="link">
                        <h2> Links</h2>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Gallery</li>
                        <li>Info</li>
                    </div>
                    <div className="footer-abt">
                        <h2>What we Provide</h2>
                        <p>Food & Stay</p>
                        <p>Transport facility</p>
                        <p>First Aid Box</p>
                        <p>Travelling & Tracking</p>
                    </div>
                    <div className="imgs">
                        <div className="imgs1">
                            <h2>Images</h2>
                            <img src="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_1280.jpg" alt="img1"/>
                            <img src="https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg" alt="img2"/>
                            <img src="https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg" alt="img3"/>
                        </div>
                        <div className="imgs2">
                            
                            <img src="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_1280.jpg" alt="img4"/>
                            <img src="https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg" alt="img5"/>
                            <img src="https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg" alt="img6"/>
                        </div>
                    </div>

                    <div className="cont">
                        <h2>Contact Us</h2>
                        <p>Mobile No: + 91 456654 56755</p>
                        <p>Email : travell@gmail.com</p>
                        <div className="icon">
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Footer;