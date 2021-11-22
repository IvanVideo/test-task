import './Preloader.css';

interface PreloaderProps {
    loader: Boolean
}

function Preloader({ loader }: PreloaderProps) {
    return (
        <section className={loader ? 'lds-roller' : 'lds-roller-hide'}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </section>
    );
}

export default Preloader;