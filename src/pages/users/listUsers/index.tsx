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


export default function ListUsers() {
    const [deleteModal, setDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    async function getUsers(){
        const response = await api.get('/users');
        setUsers(response.data.users);
        console.log(response.data)
    }

    useEffect( () => {
        getUsers()
    }, [])


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
                                   onClick={() => setDeleteModal(!deleteModal)}>
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
                        <Button>Deletar</Button>
                    </Group>
                </Modal>

                <Paper shadow="lg" radius="lg" p="md">
                    <Group position="apart" mb="md">
                        <Title order={2}>Listar Usuários</Title>
                        <Button size="md" onClick={() => navigate("/usuarios/novo")}>Cadastrar Usuário</Button>
                    </Group>

                    <Grid>
                        <Grid.Col xs={12} md={11}>
                            <TextInput
                                placeholder="Buscar por nome ou e-mail"
                            />
                        </Grid.Col>
                        <Grid.Col xs={12} md={1}>
                            <Button size="sm" fullWidth>Buscar</Button>
                        </Grid.Col>

                        <Grid.Col xs={12}>
                            <DataTable
                                columns={columns}
                                data={users}
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