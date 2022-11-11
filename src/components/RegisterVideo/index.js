import React from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
function userForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

  
    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target)
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = userForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube.." }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    /*
        ## O que precisamos para o form funcionar
            -pegar os dados vídeos que precisam vir state
                - Titulo
                - URL do vídeo
            - precisamos tewr o onSubmit do nosso form    
            - limpar o form apos o submitt
    */


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternario */}
            {/* Oper\dores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }} >
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange} />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange} />
                            <button type="submit" >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}





    // [X] Falta o botão para adicionar
    // [X] Modal
    // -> [X] Precisamos controlar o state
    // -> Formulário em si