import * as React from "react";
import {Container, Paper, Title, Grid, TextInput,  NumberInput, Select} from "@mantine/core";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import users from "../../../data/users.json";
import api from "../../../services/api";


export default function ShowUser(){
    const [userData, setUserData] = useState({});
    let params = useParams()
    let userId = params.id;

   async function getUserById() {
      const response = await api.get(`/users/${userId}`);
      setUserData(response.data);
    }

    useEffect( () => {
        getUserById()
    }, [userData])



    return(
        <Container fluid p="sm">
            <Paper shadow="lg" radius="lg" p="md">
                <Title order={2} mb="md">Detalhes de Usuário</Title>
                <Grid>
                    <Grid.Col xs={12} md={8}>
                        <TextInput
                            placeholder="Insira o nome do usuário"
                            label="Nome completo"
                            value={userData?.name}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={4}>
                        <TextInput
                            placeholder="CPF"
                            label="CPF"
                            value={userData?.cpf}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <Select
                            label="Gênero"
                            placeholder="Selecione"
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
                            value={userData?.age}
                        />
                    </Grid.Col>


                    <Grid.Col xs={12} md={6}>
                        <TextInput
                            placeholder="E-mail"
                            label="E-mail"
                            value={userData?.email}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="CEP"
                            label="CEP"
                            value={userData?.zipcode}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={6}>
                        <TextInput
                            placeholder="Endereço"
                            label="Endereço"
                            value={userData?.address}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Número"
                            label="Número"
                            value={userData?.address_number}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Bairro"
                            label="Bairro"
                            value={userData?.address_neighborhood}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Cidade"
                            label="Cidade"
                            value={userData?.address_city}
                        />
                    </Grid.Col>

                    <Grid.Col xs={12} md={3}>
                        <TextInput
                            placeholder="Estado"
                            label="Estado"
                            value={userData?.address_state}
                        />
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
    )
}