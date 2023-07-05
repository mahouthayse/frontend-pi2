import * as React from "react";
import {Container, Paper, Text, Grid, Title, PasswordInput, TextInput, Button, Anchor} from "@mantine/core";
import {useNavigate} from "react-router";


export default function Login(){
    const navigate = useNavigate();
    return(
        <Container fluid style={{height:'100vh', backgroundColor:'#F5F6F6'}} p="xl">
            <Grid justify="center" align="center" style={{height: 'inherit'}}>
                <Grid.Col xs={12} md={3}>
                    <Paper shadow="lg" radius="lg" p="lg" style={{height: 500}}>
                            <Title order={2} my="lg" ta="center">Faça Login</Title>
                            <Text size="sm" ta="center">Bem vindo de volta! Insira seu e-mail e senha cadastrados para acessar a plataforma.</Text>
                            <form>
                                <TextInput
                                    placeholder="E-mail"
                                    label="E-mail"
                                    mb="sm"
                                />
                                <PasswordInput
                                    placeholder="Senha"
                                    label="Senha"
                                    mb="sm"
                                />
                                <Button size="md" mt="sm" fullWidth onClick={() => navigate("/usuarios")}> Entrar</Button>

                                <Text size="sm" mt="md" ta="center">Ainda não tem uma conta? <Anchor href="/registro">Inscreva-se agora</Anchor></Text>
                            </form>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    )
}