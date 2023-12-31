import * as React from "react";
import {
    Container,
    Paper,
    Title,
    Grid,
    TextInput,
    Button,
    Flex,
    NumberInput,
    Select,
    PasswordInput
} from "@mantine/core";
import {useState} from "react";
import { notifications } from '@mantine/notifications';
import {IconCheck} from "@tabler/icons-react";
import api from "../../../services/api";

export default function NewUser(){
    const [userData, setUserData] = useState({});

    async function postUserData(){
        const response = await api.post('/users', userData);
        notifications.show({
            withCloseButton: true,
            autoClose: 5000,
            title: "Sucesso!",
            message: 'Usuário cadastrado com sucesso.',
            color: 'teal',
            loading: false,
        });
    }

    return(
        <Container fluid p="sm">
            <Paper shadow="lg" radius="lg" p="md">
                <Title order={2} mb="md">Cadastrar Usuário</Title>
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
                            onChange={e => setUserData({...userData, gender: e})}
                            value={userData?.gender}
                            data={[
                                { value: 'masculino', label: 'Masculino' },
                                { value: 'feminino', label: 'Feminino' }
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
                            onChange={e => setUserData({...userData, address_number: e.currentTarget.value})}
                            value={userData?.address_number}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Bairro"
                            label="Bairro"
                            onChange={e => setUserData({...userData, address_neighborhood: e.currentTarget.value})}
                            value={userData?.address_neighborhood}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Cidade"
                            label="Cidade"
                            onChange={e => setUserData({...userData, address_city: e.currentTarget.value})}
                            value={userData?.address_city}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Estado"
                            label="Estado"
                            onChange={e => setUserData({...userData, address_state: e.currentTarget.value})}
                            value={userData?.address_state}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12}>

                        <Flex
                            justify="flex-end"
                            direction="row"
                        >
                            <Button size="md" onClick={() => postUserData()}>Cadastrar Usuário</Button>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
    )
}