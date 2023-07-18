import * as React from "react";
import {
    Title,
    Container,
    Paper,
    ThemeIcon,
    Group,
    Grid,
    Button,
    TextInput,
    Modal,
    Text,
    LoadingOverlay
} from "@mantine/core";
import DataTable from 'react-data-table-component';
import users from "../../../data/users.json";
import {IconPencil, IconTrash, IconEye} from "@tabler/icons-react";
import {useNavigate} from "react-router";
import customTable from "../../../style/customTable";
import paginationStyles from "../../../style/paginationStyles";
import {useEffect, useState} from "react";
import api from "../../../services/api";
import { notifications } from '@mantine/notifications';

export default function ListUsers() {
    const [deleteModal, setDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [filteredItems, setFilteredItems] = useState('');

    async function getUsers(){
        const response = await api.get('/users');
        setUsers(response.data.users);
    }

    useEffect( () => {
        getUsers()
    }, [])

     function deleteUser() {
         api.delete(`/users/${userId}`).then( response => {
            notifications.show({
                withCloseButton: true,
                autoClose: 5000,
                title: "Sucesso!",
                message: 'Usuário deletado com sucesso.',
                color: 'teal',
                loading: false,
              });

             setDeleteModal(!deleteModal)
             getUsers();
         })

    }

    function handleFilter(e) {
        e.preventDefault()
        const value = e.target.value
        let filteredData = users.filter(item => {
            const startsWith = item.name.toLowerCase().startsWith(value.toLowerCase()) || item.email.toLowerCase().startsWith(value.toLowerCase())

            const includes =   item.name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase())
            if (startsWith) {
                return startsWith
            } else if (!startsWith && includes) {
                return includes
            } else return null
        })
        setFilteredItems(filteredData)
        setSearchItem(value)
    }


    const columns = [
        {
            name: 'Nome Completo',
            width: "350px",
            selector: row => row.name,
        },
        {
            name: 'E-mail',
            width: "350px",
            selector: row => row.email,
        },
        {
            name: 'CPF',
            selector: row => row.cpf,
        },
        {
            name: 'Idade',
            selector: row => row.age,
        },
        {
            name: 'Gênero',
            selector: row => row.gender,
        },
        {
            name: 'Ação',
            selector: row => row.id,
            center: true,
            cell: row => {
                return (
                    <Group position="apart">
                        <ThemeIcon variant="light" size="lg" radius="xl" color="#ffffff"
                                   style={{cursor: 'pointer', boxShadow: `0px 5px 10px rgba(143, 149, 178, 0.1)`}}
                                   onClick={() => navigate(`/usuarios/listar/${row.id}`)}>
                            <IconEye size={18} color="#ABB5BF"/>
                        </ThemeIcon>
                        <ThemeIcon variant="light" size="lg" radius="xl" color="#ffffff"
                                   style={{cursor: 'pointer', boxShadow: `0px 5px 10px rgba(143, 149, 178, 0.1)`}}
                                   onClick={() => navigate(`/usuarios/editar/${row.id}`)}>
                            <IconPencil size={18} color="#ABB5BF"/>
                        </ThemeIcon>
                        <ThemeIcon variant="light" size="lg" radius="xl" color="#ffffff"
                                   style={{cursor: 'pointer', boxShadow: `0px 5px 10px rgba(143, 149, 178, 0.1)`}}
                                   onClick={() => {
                                    setUserId(row.id)
                                    setDeleteModal(!deleteModal)
                                   }}>
                            <IconTrash size={18} color="#FA5252"/>
                        </ThemeIcon>
                    </Group>

                )
            }
        },
    ];

    if (loading) {
        return <LoadingOverlay visible={loading} overlayBlur={2}/>
    } else {

        return (
            <Container fluid p="sm">
                <Modal opened={deleteModal} onClose={() => setDeleteModal(!deleteModal)} centered>
                    <Title order={3} ta="center">
                        Você tem certeza de que gostaria de deletar os dados do usuário?
                    </Title>
                    <Text size="sm" mt="sm" ta="center">Ao deletar o usuário, todos os dados relacionados a ele serão
                        deletados. Você tem certeza de que gostaria de excluir?</Text>
                    <Group position="center" mt="lg">
                        <Button variant="light" onClick={() => setDeleteModal(!deleteModal)}>Cancelar</Button>
                        <Button onClick={() => {
                            deleteUser()
                        }} >Deletar</Button>
                    </Group>
                </Modal>

                <Paper shadow="lg" radius="lg" p="md">
                    <Grid>
                        <Grid.Col xs={12}>
                            <Title order={2}>Listar Usuários</Title>
                        </Grid.Col>
                        <Grid.Col xs={12}>
                            <Group position="apart" mb="sm">
                                <TextInput
                                    placeholder="Buscar por nome ou e-mail"
                                    onChange={e => handleFilter(e)}
                                />
                                <Button size="md" onClick={() => navigate("/usuarios/novo")}>Cadastrar Usuário</Button>
                            </Group>
                        </Grid.Col>

                        <Grid.Col xs={12}>
                            <DataTable
                                columns={columns}
                                data={searchItem.length ? filteredItems : users}
                                customStyles={customTable}
                                pagination
                                paginationComponentOptions={paginationStyles}
                            />
                        </Grid.Col>
                    </Grid>


                </Paper>
            </Container>
        )
    }
}