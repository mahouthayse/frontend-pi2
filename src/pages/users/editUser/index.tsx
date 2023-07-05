import * as React from "react";
import {Container, Paper, Title, Grid, TextInput,  Button, Flex, NumberInput, Select} from "@mantine/core";
import {useEffect, useState} from "react";
import { notifications } from '@mantine/notifications';
import {IconCheck} from "@tabler/icons-react";
import {useParams} from "react-router";
import users from "../../../data/users.json";

export default function EditUser(){
    const [userData, setUserData] = useState({});

    let params = useParams()
    let userId = params.id;

    function getTutorById(data, id) {
        const filteredData = data.find(tutor => tutor.id === id);
        setUserData(filteredData);
    }

    useEffect(() => {
        getTutorById(users, userId)
    }, [])

    function editUserData(){
        console.log(userData)
        notifications.show({
            withCloseButton: true,
            autoClose: 3000,
            title: "Cadastro realizado",
            message: 'O cadastro do usuário foi realizado com sucesso',
            color: 'teal',
            icon: <IconCheck />,
            loading: false,
        });
    }

    return(
        <Container fluid p="sm">
            <Paper shadow="lg" radius="lg" p="md">
                <Title order={2} mb="md">Editar Dados de Usuário</Title>
                <Grid>
                    <Grid.Col xs={12} md={8}>
                        <TextInput
                            placeholder="Insira o nome do usuário"
                            label="Nome completo"
                            onChange={e => setUserData({...userData, name: e.currentTarget.value})}
                            value={userData?.name}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={4}>
                        <TextInput
                            placeholder="CPF"
                            label="CPF"
                            onChange={e => setUserData({...userData, cpf: e.currentTarget.value})}
                            value={userData?.cpf}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <Select
                            label="Gênero"
                            placeholder="Selecione"
                            value={userData?.gender}
                            onChange={e => setUserData({...userData, gender: e})}
                            data={[
                                { value: 'Masculino', label: 'Masculino' },
                                { value: 'Feminino', label: 'Feminino' }
                            ]}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <NumberInput
                            placeholder="Idade"
                            label="Idade"
                            hideControls
                            onChange={e => setUserData({...userData, age: e})}
                            value={userData?.age}
                        />
                    </Grid.Col>


                    <Grid.Col xs={12} md={6}>
                        <TextInput
                            placeholder="E-mail"
                            label="E-mail"
                            onChange={e => setUserData({...userData, email: e.currentTarget.value})}
                            value={userData?.email}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="CEP"
                            label="CEP"
                            onChange={e => setUserData({...userData, zipcode: e.currentTarget.value})}
                            value={userData?.zipcode}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={6}>
                        <TextInput
                            placeholder="Endereço"
                            label="Endereço"
                            onChange={e => setUserData({...userData, address: e.currentTarget.value})}
                            value={userData?.address}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Número"
                            label="Número"
                            onChange={e => setUserData({...userData, addressNumber: e.currentTarget.value})}
                            value={userData?.addressNumber}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Bairro"
                            label="Bairro"
                            onChange={e => setUserData({...userData, addressNeighborhood: e.currentTarget.value})}
                            value={userData?.addressNeighborhood}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Cidade"
                            label="Cidade"
                            onChange={e => setUserData({...userData, addressCity: e.currentTarget.value})}
                            value={userData?.addressCity}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Estado"
                            label="Estado"
                            onChange={e => setUserData({...userData, addressState: e.currentTarget.value})}
                            value={userData?.addressState}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12}>

                        <Flex
                            justify="flex-end"
                            direction="row"
                        >
                            <Button size="md" onClick={() => editUserData()}>Editar Usuário</Button>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
    )
}