import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    test("Deve retornar erro ao tentar criar uma conta com senha menor que 6 caracteres", async () => {

        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "jon@gmail.com",
                name: "Jon",
                password: "123"
            }

            await userBusiness.signup(input)


        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    });


    test("Deve retornar erro ao tentar criar uma conta com email inválido", async () => {

        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "jon@gmail",
                password: "123456"
            }

            await userBusiness.login(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    });


    test("Deve retornar erro ao tentar criar uma conta com email já cadastrado", async () => {

        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "usermock@gmail.com",
                name: "User Mock",
                password: "123456"
            }

            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Email já cadastrado")
            }
        }
    });

    test("Deve retornar error ao cadastrar o nome com menos de 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "jon@gmail.com",
                name: "Jo",
                password: "123456"
            }
            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    });

    test("Deve retornar error ao cadastrar o nome com o tipo diferente de string", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "jon@gmail.com",
                name: 123,
                password: "123456"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido")
            }
        };
    });

    test("Deve retornar error ao cadastrar o email com o tipo diferente de string", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: 123,
                name: "Jon",
                password: "123456"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        };
    });

    test("Deve retornar error ao cadastrar a senha com o tipo diferente de string", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "jon@gmail.com",
                name: "Jon",
                password: 123
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        };
    });

    test("Deve retornar error ao cadastrar um email invalido", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "jongmail.com",
                name: "Jon",
                password: "123456"
            }

            await userBusiness.signup(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        };
    });


    test("Deve retornar erro quando o email não for encontrado ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "user@gmail.com",
                password: "123456"
            }
            await userBusiness.login(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Email não cadastrado")
            }
        }
    });

    test("Deve retornar erro quando a senha estiver incorreta ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "usermock@gmail.com",
                password: "1234567"
            }
            await userBusiness.login(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
            }
        }
    })

    test("Deve retornar erro quando o email for inválido ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "usermockgmail.com",
                password: "123456"
            }
            await userBusiness.login(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Deve retornar erro quando o email for diferente de string ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: 123,
                password: "123456"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Deve retornar erro quando a senha for diferente de string ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "usermockgmail.com",
                password: 123
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    });

    test("Deve retornar erro quando a senha tiver menos de 6 caracteres ao logar", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "usermockgmail.com",
                password: "123"
            }

            await userBusiness.login(input)

        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    });


})