export default function Cabecalho(){
    const estiloCabecalho = {
        position: 'fixed',        
        top: 0,
        left: 0,
        width: '100%',            
        backgroundColor: '#000000',
        padding: '10px',          
        display: 'flex',          
        justifyContent: 'space-between',
        zIndex: 9999,
        color: 'white',
    };

    return(
        <alert className="text-left" style={estiloCabecalho}>
            <h1>Walletmart</h1>
            <br/>
        </alert>
    )
};