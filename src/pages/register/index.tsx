import * as React from "react";
import {Container, Paper, Text, Grid, Title, PasswordInput, TextInput, Button, Anchor} from "@mantine/core";


export default function Register(){
    return(
        <Container fluid style={{height:'100vh', backgroundColor:'#F5F6F6'}} p="xl">
            <Grid justify="center" align="center" style={{height: 'inherit'}}>
                <Grid.Col xs={12} md={3}>
                    <Paper shadow="lg" radius="lg" p="lg" style={{height: 500}}>
                        <Title order={2} my="lg" ta="center">Cadastre-se</Title>
                        <Text size="sm" ta="center">Cadastre-se para começar a utilizar a plataforma</Text>
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

                            <PasswordInput
                                placeholder="Confirmar Senha"
                                label="Confirmar Senha"
                                mb="sm"
                            />
                            <Button size="md" mt="sm" fullWidth> Cadastrar</Button>

                            <Text size="sm" mt="md" ta="center">Já possui uma conta? <Anchor href="/">Acesse aqui</Anchor></Text>
                        </form>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    )
}