import * as React from "react";
import {
    AppShell,
    Avatar,
    Box,
    Divider,
    Group,
    Header,
    Image,
    Navbar,
    NavLink,
    Text,
    UnstyledButton
} from "@mantine/core";
import {IconCalendar, IconChevronRight, IconHome, IconPaw, IconUser, IconVaccine, IconArchive} from "@tabler/icons-react";
import {light} from "../../style/theme";
import {useNavigate} from "react-router";


const BaseComponent = Component => {
    const navigate = useNavigate()
    return(
        <AppShell
            padding="xs"
            navbar={<Navbar width={{ base: 300 }} p="xs">
                <Navbar.Section grow mt="md">
                    <NavLink
                        label="Usuários"
                        icon={<IconUser size="1rem" stroke={1.5} />}
                        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <NavLink label="Listar Usuários"
                                 onClick={() => navigate("/usuarios")}/>
                        <NavLink label="Cadastrar Usuário"
                                 onClick={() => navigate("/usuarios/novo")}/>
                    </NavLink>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider my="sm" color={light.colors.light[1]}/>
                    <UnstyledButton style={{width: '100%'}} onClick={() => navigate("/perfil")}>
                        <Group position="apart">
                            <Group position="apart">
                                <Avatar
                                    radius="xl"
                                />
                                <Box>
                                    <Text size="sm" weight={500}>
                                        e-mail@gmail.com
                                    </Text>
                                    <Text color="dimmed" size="xs">
                                        Administrador
                                    </Text>
                                </Box>
                            </Group>

                            <IconChevronRight size={18}/>
                        </Group>
                    </UnstyledButton>
                </Navbar.Section>
            </Navbar>}
            header={<Header height={60} p="xs">
                {/*<Image width={140} height={40} fit="contain" src={LogoVet} />*/}
            </Header>}
            styles={(theme) => ({main: { backgroundColor: '#F3F6F9' }})}
        >
            <Component/>
        </AppShell>
    )
}

export default BaseComponent;