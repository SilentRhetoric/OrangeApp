import john from '../assets/jaw.png';
import orange from '../assets/orangeicon.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
    return (
        <>
            <div className="opacity-20 p-2 absolute w-full text-center text-xs select-none pointer-events-none">
                Dedicated, with love, to John Alan Woods
            </div>
            <div className="flex w-full justify-center items-center py-4 relative flex-col space-y-8">
                <header className="header">
                    <div className="header__heading_group">
                        <h1 className="header__heading header__heading_top header__heading--solid">Does YOUR mom</h1>
                        <h1 className="header__heading header__heading_top header__heading--outline" aria-hidden="true">
                            Does YOUR mom
                        </h1>
                    </div>
                    <div className="header__img_wrapper">
                        <img alt="header" className="header__img" src={john} />
                    </div>
                    <div className="header__heading_group">
                        <h1 className="header__heading header__heading_bottom header__heading--solid">
                            have four oranges?
                        </h1>
                        <h1
                            className="header__heading header__heading_bottom header__heading--outline"
                            aria-hidden="true"
                        >
                            have four oranges?
                        </h1>
                    </div>
                </header>
                <img src={orange} className="w-32 md:w-48 lg:w-64 h-full shadow rounded-lg" />
                <Link to="mining" className="py-6">
                    <Button>
                        Start mining <b className="opacity-60">ORA</b>!
                    </Button>
                </Link>
                <div className="max-w-sm md:max-w-md mx-4 lg:max-w-lg xl:max-w-xl space-y-4 bg-orange-500 bg-opacity-80 p-4 rounded-lg shadow-lg">
                    <div className="indent-8">
                        <b>Orange</b>{' '}
                        <span className="opacity-60">
                            (ticker: <b>ORA</b>)
                        </span>{' '}
                        is a "mineable" Algorand Standard Asset fully managed by an open-source smart contract. It
                        operates similarily to <b>Bitcoin</b>{' '}
                        <span className="opacity-60">
                            (ticker: <b>BTC</b>)
                        </span>
                        , where multiple parties can compete to earn a coin in a decentralized trustless manner.
                    </div>
                    <div className="indent-8">
                        The mining mechanism of <b className="opacity-60">ORA</b> is based on transaction fees: whenever
                        any account submits a "mine" application transaction, the fee paid to the Algorand protocol is
                        saved in the contract. The miner with the total highest amount of fees paid in total that has
                        submittted a "mine" transaction within a given period is rewarded & coins are sent automatically
                        after the next period of mining, while his (and only his) total amount of fees paid is reset to
                        zero.
                    </div>
                    <div className="indent-8">
                        This means that <b className="opacity-60">ORA</b> functions both as a store of value & as a way
                        to reward users increasing the Algorand network throughput.
                    </div>
                </div>
                <div className="pt-16 opacity-50 text-xs">There is nothing here, go mine</div>
            </div>
        </>
    );
}

export default Home;
