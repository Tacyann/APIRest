import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
//import { FcEditImage, FcCellPhone, FcCalendar, FcHome, FcBusinessman } from 'react-icons/fc';
//import { TiDocument, TiSortNumerically, TiClipboard } from "react-icons/ti";

import api from '../../services/api';

import './styles.css';

import cheersImg from '../../assets/saude2.png';

export default function ListarEstudante() {
    const [Estudante, setEstudante] = useState([]);

    const idEstudante = localStorage.getItem('idEstudante');
    const nomeEstudante = localStorage.getItem('nomeEstudante');

    useEffect(() => {
        api.get('Estudante', {
            headers: {
                Authorization: idEstudante,
            }
        }).then(Response => {
            setEstudante(Response.data);
        })
    }, [idEstudante]);

    async function handleDeleteEstudante(idEstudante){
        try{
            await api.delete(`Estudante/${idEstudante}`,{
                headers: {
                    Authorization: idEstudante,
                }  
            });
            setEstudante(Estudante.filter(Estudantes => Estudante.idEstudante !== idEstudante))
        }catch (err){
            alert('Erro ao deletar Estudante, tente novamente.');
        }
    }

    return (
        <div className="listarEstudante-container">
            <header>
                <img src={cheersImg} alt="Logo" />
                <span>Bem vindo, {nomeEstudante}</span>
                <Link className='button' to="/Estudante">Cadastrar Estudantes</Link>
                <button type='button'>
                    <FiPower size={18} color="#602041" />
                </button>
            </header>
            <h1>Estudantes Cadastrados</h1>
            <ul>
                {Estudante.map(Estudante => (
                    <li key={Estudante.idEstudante}>
                        <strong>Nome do Estudante:</strong>
                        <p>{Estudante.nomeEstudante}</p>

                        <strong>Data de Nascimento:</strong>
                        <p>{Estudante.datNascimento}</p>

                        <strong>Telefone:</strong>
                        <p>{Estudante.telEstudante}</p>

                        <strong>RG:</strong>
                        <p>{Estudante.RGEstudante}</p>

                        <strong>CPF:</strong>
                        <p>{Estudante.CPFEstudante}</p>

                        <strong>Rua:</strong>
                        <p>{Estudante.ruaEstudante}</p>

                        <strong>Bairro:</strong>
                        <p>{Estudante.bairro}</p>

                        <strong>Número:</strong>
                        <p>{Estudante.numEstudante}</p>

                        <button onClick={()=>handleDeleteEstudante(Estudante.idEstudante)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}