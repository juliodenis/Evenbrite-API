import React, { Component } from 'react';
import axios from 'axios';

// crear el cnotext
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'LRVYPWUUVLMORZMGFJ';

    state = { 
        categorias: []
     }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/${this.token}&locale=es_ES`

        let categorias = await axios.get(url);
        console.log(categorias)
    }

    render() { 
        return ( 
            <CategoriasContext.Provider
            value={{
                categorias: this.state.categorias
            }}
            >
                {this.props.children}


            </CategoriasContext.Provider>
         );
    }
}

export default CategoriasProvider;