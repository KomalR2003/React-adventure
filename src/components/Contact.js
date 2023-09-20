function Contact() {
    return (
        <>
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
                        <br/>
                        <br/>
                        <label for="msg">Message:</label>
                        <br />
                        <input type="textarea" placeholder="Enter your Message" className="nm" id="msg"></input>
                        <br/>
                        <br/>

                        <button className="sub">Send</button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Contact;