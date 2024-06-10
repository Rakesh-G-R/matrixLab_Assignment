import { useEffect, useState, useRef } from 'react';
import '../style/Home.css';

function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [animateColumn1, setAnimateColumn1] = useState(false);
    const [animateColumn2, setAnimateColumn2] = useState(false);
    const [animateColumn3, setAnimateColumn3] = useState(false);
    const contentRef = useRef(null);



    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const contentTop = contentRef.current.getBoundingClientRect().top;

            if (contentTop <= navbarHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollAnimation = () => {
            const contentTop = contentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (contentTop <= windowHeight / 2) {
                // Trigger animation for column 1 and column 3
                setAnimateColumn1(true);
                setAnimateColumn3(true);

                // Delay animation for column 2 by 1 second
                setTimeout(() => {
                    setAnimateColumn2(true);
                }, 1000);

                // Remove the scroll event listener after animation is triggered
                window.removeEventListener('scroll', handleScrollAnimation);
            }
        };

        window.addEventListener('scroll', handleScrollAnimation);

        return () => {
            window.removeEventListener('scroll', handleScrollAnimation);
        };
    }, []);

    return (
        <div className="main">
            <section className='navbar'>
                <div>
                    <div>
                        <p>AI.GEN</p>
                        <div className='navbar-link'>
                            <p>Features</p>
                            <p>Roadmap</p>
                            <p>Tokenomics</p>
                        </div>
                    </div>
                    <div className='navbar-btns'>
                        <button><p>Whitepaper</p></button>
                        <button><p>Get Started</p></button>
                    </div>
                </div>
            </section>
            <div className={`blur-overlay ${isScrolled ? 'active' : ''}`}></div>
            <section ref={contentRef} className="home">
                <section>
                    <div className='home-container1'>
                        <div>
                            <p>🎉</p>
                            <p>New in AI.GEN:  Real Time Interaction</p>
                        </div>
                        <div className='home-heading'>
                            <div>
                                <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
                            </div>
                            <div>
                                <p>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
                            </div>
                            <div className='home-btn1'>
                                <button><p>Get Started</p></button>
                            </div>
                        </div>
                    </div>
                    <div className='home-container2'>
                        <div className={`home-column1 ${animateColumn1 ? 'animate' : ''}`}>
                            <img src="/Picture.png" alt="" />
                            <img src="/Picture1.png" alt="" />
                            <img src="/Picture2.png" alt="" />
                        </div>
                        <div className={`home-column2 ${animateColumn2 ? 'animate' : ''}`}>
                            <img src="/Picture3.png" alt="" />
                            <img src="/Picture4.png" alt="" />
                            <img src="/Picture5.png" alt="" />
                        </div>
                        <div className={`home-column3 ${animateColumn3 ? 'animate' : ''}`}>
                            <img src="/Picture6.png" alt="" />
                            <img src="/Picture7.png" alt="" />
                            <img src="/Picture8.png" alt="" />
                        </div>
                    </div>
                </section>
                <section className='midpage'>
                    <div>
                       <div>
                         <div>
                            <h2><span>Create, customize, and publish</span><span> your digital persona to life effortlessly.</span></h2>
                         </div>
                       </div>
                    </div>
                    
                </section>
            </section>
        </div>
    );
}

export default Home;
