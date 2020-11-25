import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';


import cheersImg from '../../assets/saude2.png';

export default function Estudante() {

    const [nome, setnome] = useState('');
    const [datNascimento, setdatNascimento] = useState('');
    const [telEstudante, setTelefone] = useState('');
    const [RGEstudante, setRGEstudante] = useState('');
    const [CPFEstudante, setCPFEstudante] = useState('');
    const [rua, setrua] = useState('');
    const [bairro, setbairro] = useState('');
    const [num, setnum] = useState('');

    const history = useHistory();

    async function handleEstudante(e) {
        e.preventDefault();

        const data = {
            nome,
            datNascimento,
            telEstudante,
            RGEstudante,
            CPFEstudante,
            rua,
            bairro,
            num,

        };
        try {
            const response = await api.post('Estudante', data);
            alert(`CREATED: ${response.data.idEstudante}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="Estudante-container">
            <div className="content">
                <section className="p" >
                    <img src={cheersImg} alt="Logo" />
                    <h1>Cadastro de Estudante</h1>
                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={18} color="#e02041" />
                        Voltar.
                        </Link>
                </section >
                <form onSubmit={handleEstudante}>
                    <input placeholder="Nome do Estudante" 
                    value={nome}
                    onChange={e => setnome(e.target.value)}
                    />
                    <input type="date" placeholder="Data de Nascimento:" 
                    value={datNascimento}
                    onChange={e => setdatNascimento(e.target.value)}
                    />
                    <input placeholder="Telefone"
                    value={telEstudante}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <input placeholder="RG"
                    value={RGEstudante}
                    onChange={e => setRGEstudante(e.target.value)}
                    />
                    <input placeholder="CPF"
                    value={CPFEstudante}
                    onChange={e => setCPFEstudante(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Rua"
                        value={rua}
                        onChange={e => setrua(e.target.value)}
                        />
                        <input placeholder="Bairro" 
                        value={bairro}
                        onChange={e => setbairro(e.target.value)}
                        />
                        <input placeholder="Num" style={{ width: 100 }}
                        value={num}
                        onChange={e => setnum(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <Link className='button' to="/listarEstudante">Listar</Link>
                    <Link className='button' to="/register">Cancelar</Link>
                    
                </form>
            </div>
        </div>
    );
}